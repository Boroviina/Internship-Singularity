import React, {useEffect, useState} from 'react';
import styles from './JobListingPage.module.css';
import CheckboxGroup from "./components/filter-components/CheckboxGroup";
import Dropdown from "./components/filter-components/Dropdown";
import Search from "./components/Search";
import SortBy from "./components/SortBy";
import Pagination from "./components/Pagination";
import JobListingCard from "./JobListingCard";
import DetailsModal from "./DetailsModal";
import {JobListing} from "../../shared/models/job-listing.model";
import {getJobs} from "../../shared/services/job.service";
import Filters from "./components/filter-components/Filters";

export class JobFilters {
    specialization: string[] = [];
    remote: string[] = [];
    employmentType: string[] = [];
    experience: string[] = [];
    education: string[] = [];


    constructor(specialization: string[], remote: string[], employmentType: string[], experienceLevel: string[], educationLevel: string[]) {
        this.specialization = specialization;
        this.remote = remote;
        this.employmentType = employmentType;
        this.experience = experienceLevel;
        this.education = educationLevel;
    }
}

export function filterJobs(jobs: JobListing[], filters: JobFilters) {
    const filteredJobs = jobs.filter(job => (
        matchesAnyFilter(job.requirements.specialization, filters.specialization)
        && matchesAnyFilter(job.remote, filters.remote)
        && matchesAnyFilter(job.employmentType, filters.employmentType)
        && matchesAnyFilter(job.requirements.experience, filters.experience)
        && matchesAnyFilter(job.requirements.education, filters.education))
    );
    return filteredJobs;
};

function matchesAnyFilter(jobAttribute: string, filterItems: string[]) {
    if (filterItems.length === 0) {
        return true;
    } else {
        for (let i = 0; i < filterItems.length; i++) {
            if (filterItems[i] === jobAttribute) {
                return true;
            }
        }
        return false;
    }
}

const JobListingPage = () => {
    const [jobs, setJobs] = useState(null)
    const [shownJob, setShownJob] = useState<JobListing>(null);
    const [showDetails, setShowDetails] = useState(false);

    const handleClose = () => setShowDetails(false);
    const handleOpen = (job: JobListing) => {
        setShownJob(job);
        setShowDetails(true)
    };
    useEffect(() => {
        fetchJobs();
    }, /*filter, search...*/[]);

const fetchJobs = async () => {
    const jobs = await getJobs();
    // const filteredJobs = filterJobs(jobs, new JobFilters([], [], [], [], []));
    setJobs(jobs);
};

    let jobsContent = <div>No jobs could be found.</div>;

    if (jobs) {
        jobsContent = jobs.map(job => {
            console.log(job);
            return <JobListingCard job={job} showDetails={handleOpen} key={job.id}/>;
        });
    }

    return (
        <>
            <body>

            <header className={`${styles.hero}`}>
                <div className={`text-center ${styles.overlay}`}>
                    <Search/>
                </div>
            </header>

            <main id="jobs-and-filter" className="my-4">
                <div className="container">
                    <div className="row">

                        <section className="col-lg-3 col-md-4 order-2 order-md-1">
                            <Filters>
                                <CheckboxGroup name="Specialization" filters={Object.values(Specialization)}/>
                                <Dropdown name="Remote" filters={Object.values(Remote)}/>
                                <CheckboxGroup name="Employment type" filters={Object.values(EmploymentType)}/>
                                <Dropdown name="Experience level" filters={Object.values(ExperienceLevel)}/>
                                <Dropdown name="Education level" filters={Object.values(EducationLevel)}/>
                            </Filters>
                        </section>

                        <section className="col-lg-9 col-md-8 order-1 order-md-2">
                            <div className="d-flex align-items-center justify-content-between px-2">
                                <div className="text-muted fs-5">
                                    Results: {24}
                                </div>
                                <SortBy categories={sortByCategories}/>
                            </div>
                            <div className="jobs my-2">
                                {jobsContent}
                            </div>
                            <Pagination/>
                        </section>

                    </div>
                </div>
            </main>
            </body>

            {shownJob && <DetailsModal job={shownJob} showDetails={showDetails} close={handleClose}/>}
        </>
    );
}

export default JobListingPage;

enum Specialization {
    FinanceAndAccounting = "Finance & accounting",
    Legal = "Legal",
    Technology = "Technology",
    AdministrativeAndCustomerSupport = "Administrative & customer support",
    MarketingAndCreative = "Marketing & creative",
}

enum EmploymentType {
    FullTime = "Full time",
    PartTime = "Part time",
    Internship = "Internship",
    Contract = "Contract",
    Temporary = "Temporary",
}

enum Remote {
    Remote = "Remote",
    Hybrid = "Hybrid",
}

enum ExperienceLevel {
    NoExperience = "No experience",
    EntryLevel = "Entry level",
    MidLevel = "Mid level",
    SeniorLevel = "Senior level",
}

enum EducationLevel {
    NotRequired = "Not required",
    College = "College",
    AssociatesDegree = "Associate's degree",
    BachelorsDegree = "Bachelor's degree",
    MastersDegree = "Master's degree",
    DoctorsDegree = "Doctor's degree",
}

const sortByCategories = ["Relevance", "Date", "Salary"];