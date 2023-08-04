import React, {useEffect, useState} from 'react';
import styles from './JobListingPage.module.css';
import CheckboxGroup from "./components/filter-components/CheckboxGroup";
import Dropdown from "./components/filter-components/Dropdown";
import Search from "./components/Search";
import Filters from "./components/filter-components/Filters";
import SortBy from "./components/SortBy";
import Pagination from "./components/Pagination";
import JobListingCard from "./JobListingCard";
import DetailsModal from "./DetailsModal";
import {JobListing} from "../../shared/models/job-listing.model";
import {RequirementsModel} from "../../shared/models/requirements.model";
import {Employer} from "../../shared/models/employer.model";
import {getJobs} from "../../shared/services/job.service";

const JobListingPage = () => {
    const [shownJob, setShownJob] = useState<JobListing>(null);
    const [showDetails, setShowDetails] = useState(false);
    const handleClose = () => setShowDetails(false);
    const handleOpen = (job: JobListing) => {
        setShownJob(job);
        setShowDetails(true)
    };

    const [jobs, setJobs] = useState(null);
    useEffect(() => {
        fetchJobs();
    }, /*filter, search...*/[]);

const fetchJobs = async () => {
    try {
        const jobs = await getJobs();
        setJobs(jobs);
    } catch (error) {
        console.log(error);
    }
}
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
                                <CheckboxGroup name="Specialization" filters={specialization}/>
                                <Dropdown name="Remote" filters={remote}/>
                                <CheckboxGroup name="Employment type" filters={employmentType}/>
                                <Dropdown name="Experience level" filters={experienceLevel}/>
                                <Dropdown name="Education level" filters={educationLevel}/>
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

const specialization = ["Finance and accounting", "Legal", "Technology",
    "Administrative & customer support", "Marketing & creative"];
const employmentType = ["Full time", "Part time", "Internship", "Contract", "Temporary"];
const remote = ["Remote", "Hybrid"];
const experienceLevel = ["No experience", "Entry level", "Mid level", "Senior level"];
const educationLevel = ["Not required", "College", "Associate's degree", "Bachelor's degree",
    "Master's degree", "Doctor's degree"];
const sortByCategories = ["Relevance", "Date", "Salary"];

const DESCRIPTION = "     We offer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci\n" +
    "            aliquam\n" +
    "            asperiores autem beatae consectetur culpa deleniti deserunt doloremque doloribus, excepturi\n" +
    "            harum\n" +
    "            impedit ipsa iure iusto laborum laudantium libero magni maxime minima nam nisi nulla omnis\n" +
    "            optio,\n" +
    "            perspiciatis porro quaerat quam quod reiciendis tempore ullam obey voluptatum! Aperiam,\n" +
    "            illo?\n" +
    "            <br/><br/>\n" +
    "            As well as Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deleniti deserunt\n" +
    "            distinctio, doloribus harum pariatur quas recusandae repellendus repudiandae sunt.\n" +
    "            <br/>\n" +
    "            <ul>\n" +
    "                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, unde!</li>\n" +
    "                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem!</li>\n" +
    "                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>\n" +
    "                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores beatae error nam\n" +
    "                    quas\n" +
    "                    quod?\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque praesentium, quaerat? Amet\n" +
    "            aperiam\n" +
    "            delectus eum exercitationem nemo. Dolorem odit, saepe!\n";