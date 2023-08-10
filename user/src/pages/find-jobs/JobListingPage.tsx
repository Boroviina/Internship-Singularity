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
    const handleFiltersChanged = (changedItems: JobFilters) => {
        setFilters(changedItems);
    };

    useEffect(() => {
        fetchJobs();
    }, [filters]);

    const fetchJobs = async () => {
        const jobs = await getJobs();
        const filteredJobs = filterJobs(jobs, filters);
        setJobs(filteredJobs);
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
                                               updateFilters={handleFiltersChanged}/>
                                <Dropdown name="Remote" values={Object.values(Remote)}
                                          updateFilters={handleFiltersChanged}/>
                                <CheckboxGroup name="Employment type" values={Object.values(EmploymentType)}
                                               updateFilters={handleFiltersChanged}/>
                                <Dropdown name="Experience level" values={Object.values(ExperienceLevel)}
                                          updateFilters={handleFiltersChanged}/>
                                <Dropdown name="Education level" values={Object.values(EducationLevel)}
                                          updateFilters={handleFiltersChanged}/>
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