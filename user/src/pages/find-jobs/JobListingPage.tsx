import React, {useEffect, useRef, useState} from 'react';
import styles from './JobListingPage.module.css';
import CheckboxGroup from "./components/filter-components/CheckboxGroup";
import Dropdown from "./components/filter-components/Dropdown";
import Search from "./components/Search";
import SortBy, {getSortedBySalaryDescending} from "./components/SortBy";
import JobListingCard from "./JobListingCard";
import DetailsModal from "./DetailsModal";
import {JobListing, JobResponse} from "../../shared/models/job-listing.model";
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
import {useLocation} from "react-router-dom";
import {Pagination} from "./components/Pagination";
export function getFilteredJobs(jobs: JobListing[], filters: JobFilters) : JobListing[]{
    if(jobs != null) {
        return jobs.filter(job => job.matches(filters));
    } else {
        return null;
    }
};

const JOBS_PER_PAGE = 8;

const JobListingPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const titleParam = queryParams.get('title');
    const locationParam = queryParams.get('location');

    const [jobs, setJobs] = useState<JobListing[]>([]);
    const [filters, setFilters] = useState(new JobFilters());
    const [filteredJobs, setFilteredJobs] = useState<JobListing[]>([]);
    const [numOfJobs, setNumOfJobs] = useState(0);
    const [sortingFunction, setSortingFunction] = useState("Relevance");
    const [savedJobs, setSavedJobs] = useState<string[]>([]);

    const [showDetails, setShowDetails] = useState(false);
    const [shownJob, setShownJob] = useState<JobListing>(null);
    const {currentUser} = useAuth();

    const [response, setResponse] = useState<JobResponse>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const handleClose = () => setShowDetails(false);
    const handleOpen = (job: JobListing) => {
        setShownJob(job);
        setShowDetails(true)
    };

    const handleSort = (sort) => {setSortingFunction(sort);};

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
        fetchJobs(titleParam, locationParam);
        fetchSavedJobs();
    }, []);

    const fetchJobs = async (title?: string, location?: string) => {
        queryParams.set('title', title);
        queryParams.set('location', location);
        const jobResponse = await getJobs(title, location);

        setResponse(jobResponse);
        setCurrentPage(jobResponse.page);

        const nonExpiredJobs = jobResponse.results.filter((job) => new Date(job.appDeadline) > new Date());
        setJobs(nonExpiredJobs);
    };

    const fetchSavedJobs = async () => {
        try {
            const results = await getUsersSavedJobs(`${currentUser.id}`);
            const savedjobs = [];
            if(results || results.length > 0) {
                results.map(savedJob => savedjobs.push(savedJob.job.id))
            }
            setSavedJobs(savedjobs);
        } catch(error) {
            console.log(error);
        }
    }

    const handleFilterChanged = (changedFilter: any[], name: string) => {
        const newFilters = new JobFilters();
        newFilters.copy(filters);
        newFilters[name] = changedFilter;
        setFilters(newFilters);
    };

    const displayJobs = (filteredJobs: JobListing[]) => {
        const startIndex = JOBS_PER_PAGE * (currentPage - 1);
        const endIndex = startIndex + JOBS_PER_PAGE;
        const shownJobs = filteredJobs.slice(startIndex, endIndex);
        return shownJobs.map(job => (<JobListingCard job={job}
                                                        showDetails={handleOpen}
                                                        key={job.id}
                                                        update={() => {fetchJobs();fetchSavedJobs();}}/>));
    };

    const jobsContent = (filteredJobs && filteredJobs.length > 0)
        ? displayJobs(filteredJobs)
        : <h3 className="text-label ms-1">No jobs found.</h3>;

    const onPageChange = (page) => {setCurrentPage(page);};


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
                                    Results: {response ? response.totalResults : 0}
                                </div>
                                <SortBy categories={sortByCategories} sortBy={handleSort}/>
                            </div>
                            <div className="jobs my-2">
                                {jobsContent}
                            </div>
                            <Pagination className="justify-content-center"
                                page={currentPage} totalPages={response ? Math.ceil(response.totalResults / JOBS_PER_PAGE) : 0}
                                        onPageChange={onPageChange} />
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