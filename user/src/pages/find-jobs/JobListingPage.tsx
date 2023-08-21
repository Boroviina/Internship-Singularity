import React, {useEffect, useState} from 'react';
import styles from './JobListingPage.module.css';
import CheckboxGroup from "./components/filter-components/CheckboxGroup";
import Dropdown from "./components/filter-components/Dropdown";
import Search from "./components/Search";
import SortBy, {getSortedBySalaryDescending} from "./components/SortBy";
import Pagination from "./components/Pagination";
import JobListingCard from "./JobListingCard";
import DetailsModal from "./DetailsModal";
import {JobListing} from "../../shared/models/job-listing.model";
import {getJobs} from "../../shared/services/job.service";
import Filters from "./components/filter-components/Filters";
import {getUsersSavedJobs} from "../../shared/services/job-saved.service";
import {useAuth} from "../../modules/auth";
import {
    Education,
    EmploymentType,
    Experience,
    JobFilters,
    Remote,
    Specialization,
    sortByCategories
} from "./components/filter-components/JobFilters";

export function getFilteredJobs(jobs: JobListing[], filters: JobFilters) : JobListing[]{
    if(jobs != null) {
        return jobs.filter(job => job.matches(filters));
    } else {
        return null;
    }
};

const JobListingPage = () => {
    const [jobs, setJobs] = useState<JobListing[]>([]);
    const [filters, setFilters] = useState<JobFilters>(new JobFilters());
    const [filteredJobs, setFilteredJobs] = useState<JobListing[]>([]);
    const [numOfJobs, setNumOfJobs] = useState(0);
    const [sortingFunction, setSortingFunction] = useState("Relevance");
    const [savedJobs, setSavedJobs] = useState<string[]>([]);

    const [showDetails, setShowDetails] = useState(false);
    const [shownJob, setShownJob] = useState<JobListing>(null);
    const {currentUser} = useAuth();

    const handleClose = () => setShowDetails(false);
    const handleOpen = (job: JobListing) => {
        setShownJob(job);
        setShowDetails(true)
    };

    const handleSort = (sort) => {
        setSortingFunction(sort);
    };

    useEffect(() => {
        const filteredJobs  = getFilteredJobs(jobs, filters);
        setNumOfJobs(filteredJobs.length);
        if(sortingFunction === "Salary") {
            setFilteredJobs(getSortedBySalaryDescending(filteredJobs));
        } else {
            setFilteredJobs(filteredJobs);
        }
    }, [jobs, filters, sortingFunction]);

    useEffect(() => {
        fetchJobs(/*title, location*/);
        fetchSavedJobs();
    }, []);

    const fetchJobs = async (title?: string, location?: string) => {
        const jobs = await getJobs(title, location);
        setJobs(jobs);
    };

    const fetchSavedJobs = async () => {
        try {
            const results = await getUsersSavedJobs(`${currentUser.id}`);
            const savedjobs = [];
            if(results || results.length > 0) {
                results.map(savedJob => savedjobs.push(savedJob.job.id))
            }
            setSavedJobs(savedjobs)
        } catch(error) {
            console.log(error)
        }
    }

    const handleFilterChanged = (changedFilter: any[], name: string) => {
        const newFilters = new JobFilters();
        newFilters.copy(filters);
        newFilters[name] = changedFilter;
        setFilters(newFilters);
    };

    const jobsContent = (filteredJobs && filteredJobs.length > 0) ? filteredJobs.map
        (job => (<JobListingCard job={job}
                                 showDetails={handleOpen}
                                 key={job.id}
                                 update={() => {fetchJobs();fetchSavedJobs();}}/>))
        : <h3 className="text-label ms-1">No jobs found.</h3>;

    return (
        <>

            <header className={`${styles.hero}`}>
                <div className={`text-center ${styles.overlay}`}>
                    <Search search={fetchJobs}/>
                </div>
            </header>

            <main id="jobs-and-filter" className="my-4">
                <div className="container">
                    <div className="row">

                        <section className="col-lg-3 col-md-4 order-2 order-md-1">
                            <Filters>
                                <CheckboxGroup filterInfo={Specialization}
                                               updateFilters={handleFilterChanged}/>
                                <Dropdown filterInfo={Remote}
                                          updateFilters={handleFilterChanged}/>
                                <CheckboxGroup filterInfo={EmploymentType}
                                               updateFilters={handleFilterChanged}/>
                                <Dropdown filterInfo={Experience}
                                          updateFilters={handleFilterChanged}/>
                                <Dropdown filterInfo={Education}
                                          updateFilters={handleFilterChanged}/>
                            </Filters>
                        </section>

                        <section className="col-lg-9 col-md-8 order-1 order-md-2">
                            <div className="d-flex align-items-center justify-content-between px-2">
                                <div className="text-muted fs-5">
                                    Results: {numOfJobs}
                                </div>
                                <SortBy categories={sortByCategories} sortBy={handleSort}/>
                            </div>
                            <div className="jobs my-2">
                                {jobsContent}
                            </div>
                            <Pagination/>
                        </section>

                    </div>
                </div>
            </main>

            {shownJob && <DetailsModal job={shownJob} showDetails={showDetails} close={handleClose}
                                       update={() => {fetchJobs();fetchSavedJobs();}} isJobSaved={savedJobs.includes(shownJob.id)}/>}
        </>
    );
}

export default JobListingPage;