import React, {useState} from 'react';
import styles from './JobListingPage.module.css';
import CheckboxGroup from "./components/CheckboxGroup";
import Dropdown from "./components/Dropdown";
import Job from "./components/JobListing";
import {Header} from "../Header/Header";
import {Footer} from "../generalFooter/Footer";
import Search from "./components/Search";
import Filters from "./components/Filters";
import SortBy from "./components/SortBy";
import Pagination from "./components/Pagination";
import {Button, Modal} from "react-bootstrap";
import JobListing from "./components/JobListing";

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
    return (
        <>
            <Header/>
            <body>
            <header className={`mb-5 ${styles.hero}`}>
                <div className={`text-center ${styles.overlay}`}>
                    <Search/>
                </div>
            </header>
            <main id="jobs-and-filter">
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
                                <JobListing showDetails={handleOpen}/>
                                <JobListing showDetails={handleOpen}/>
                                <JobListing showDetails={handleOpen}/>
                                <JobListing showDetails={handleOpen}/>
                                <JobListing showDetails={handleOpen}/>
                            </div>
                            <Pagination/>
                        </section>
                    </div>
                </div>
            </main>
            </body>
            <Footer/>

            <Modal show={showDetails} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default JobListingPage;