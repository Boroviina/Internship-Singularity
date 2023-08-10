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
import {
    EducationLevel,
    EmploymentType,
    ExperienceLevel,
    JobFilters,
    Remote,
    Specialization,
    sortByCategories
} from "./components/filter-components/JobFilters";

export function filterJobs(jobs: JobListing[], filters: JobFilters) {
    return jobs.filter(job => (job.matches(filters)));
};

const JobListingPage = () => {
    const [jobs, setJobs] = useState(null);
    const [filters, setFilters] = useState<JobFilters>(new JobFilters());
    const [shownJob, setShownJob] = useState<JobListing>(null);
    const [showDetails, setShowDetails] = useState(false);

    const handleClose = () => setShowDetails(false);
    const handleOpen = (job: JobListing) => {
        setShownJob(job);
        setShowDetails(true)
    };

    useEffect(() => {
        fetchJobs();
    }, [filters]);

    const fetchJobs = async () => {
        const jobs = await getJobs();
        const filteredJobs = filterJobs(jobs, filters);
        setJobs(filteredJobs);
    };

    const handleSpecializationChanged = (specialization : string[]) => {
        const newFilters = new JobFilters();
        newFilters.setSpecialization(specialization);
        setFilters(newFilters);
    }

    const handleEmploymentTypeChanged = (employmentType: string[]) => {
        const newFilters = new JobFilters();
        newFilters.setEmploymentType(employmentType);
        setFilters(newFilters);
    };

    const handleRemoteChanged = (remote: string[]) => {
        const newFilters = new JobFilters();
        newFilters.setRemote(remote);
        setFilters(newFilters);
    }

    const handleExperienceLevelChanged = (experienceLevel: string[]) => {
        const newFilters = new JobFilters();
        newFilters.setExperience(experienceLevel);
        setFilters(newFilters);
    };

    const handleEducationLevelChanged = (educationLevel: string[]) => {
        const newFilters = new JobFilters();
        newFilters.setEducation(educationLevel);
        setFilters(newFilters);
    };


    let jobsContent = <div>No jobs could be found.</div>;

    if (jobs) {
        jobsContent = jobs.map(job => (<JobListingCard job={job}
                                                       showDetails={handleOpen}
                                                       key={job.id}/>));
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
                                <CheckboxGroup name={"Specialization"} values={Object.values(Specialization)}
                                               updateFilters={handleSpecializationChanged}/>
                                <Dropdown name="Remote" values={Object.values(Remote)}
                                          updateFilters={handleRemoteChanged}/>
                                <CheckboxGroup name="Employment type" values={Object.values(EmploymentType)}
                                               updateFilters={handleEmploymentTypeChanged}/>
                                <Dropdown name="Experience level" values={Object.values(ExperienceLevel)}
                                          updateFilters={handleExperienceLevelChanged}/>
                                <Dropdown name="Education level" values={Object.values(EducationLevel)}
                                          updateFilters={handleEducationLevelChanged}/>
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