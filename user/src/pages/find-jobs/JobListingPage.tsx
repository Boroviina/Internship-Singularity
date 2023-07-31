import React, {useState} from 'react';
import styles from './JobListingPage.module.css';
import CheckboxGroup from "./components/filter-components/CheckboxGroup";
import Dropdown from "./components/filter-components/Dropdown";
import {Header} from "../Header/Header";
import {Footer} from "../generalFooter/Footer";
import Search from "./components/Search";
import Filters from "./components/filter-components/Filters";
import SortBy from "./components/SortBy";
import Pagination from "./components/Pagination";
import JobListingCard from "./JobListingCard";
import DetailsModal from "./DetailsModal";
import {JobListing} from "../../shared/models/job-listing.model";
import {RequirementsModel} from "../../shared/models/requirements.model";

const JobListingPage = () => {
    const [showDetails, setShowDetails] = useState(false);
    const handleClose = () => setShowDetails(false);
    const handleOpen = () => setShowDetails(true);

    const specialization = ["Finance and accounting", "Legal", "Technology",
        "Administrative & customer support", "Marketing & creative"];
    const employmentType = ["Full time", "Part time", "Internship", "Contract", "Temporary"];
    const remote = ["Remote", "Hybrid"];
    const experienceLevel = ["No experience", "Entry level", "Mid level", "Senior level"];
    const educationLevel = ["Not required", "College", "Associates", "Bachelors", "Masters", "Doctorate"];
    const sortByCategories = ["Relevance", "Date", "Pay"];
    const job1 = new JobListing({
        jobTitle: "Backend developer",
        companyName: "Amazon",
        location: "Sydney - Australia",
        monthlyPay: 4000,
        appDeadline: new Date("12/7/2023"),
        description: "",
        remote: "Remote",
        datePosted: "string", // ustvari timestamp - korisnicko vrijeme

        requirementsModel: RequirementsModel,

        appInstructions: "string",
    });
    return (
        <>
            <Header/>
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
                                <JobListingCard showDetails={handleOpen}/>
                                <JobListingCard showDetails={handleOpen}/>
                                <JobListingCard showDetails={handleOpen}/>
                                <JobListingCard showDetails={handleOpen}/>
                                <JobListingCard showDetails={handleOpen}/>
                            </div>
                            <Pagination/>
                        </section>

                    </div>
                </div>
            </main>
            </body>

            <Footer/>

            <DetailsModal showDetails={showDetails} close={handleClose}/>
        </>
    );
}

export default JobListingPage;