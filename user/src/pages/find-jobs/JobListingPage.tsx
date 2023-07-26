import React from 'react';
import styles from './jobListingPage.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons/faFilter";
import CheckboxGroup from "./components/CheckboxGroup";
import Dropdown from "./components/Dropdown";
import Job from "./components/JobListing";
import {Header} from "../Header/Header";
import {Footer} from "../generalFooter/Footer";
import generalBtn from "../Home/GeneralButton.module.css"
import Search from "./components/Search";

const JobListingPage = () => {
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
                    <Search />
                </div>
            </header>
            <main id="jobs-and-filter">
                <div className="container">
                    <div className="row">
                        <section className="col-lg-3 col-md-4 order-2 order-md-1">
                            <div className="align-items-center mb-2">
                                <FontAwesomeIcon icon={faFilter}
                                                 style={{color: "#fb246a", height: 30}}/>
                                <h5 className="d-inline align-baseline">
                                    Filter jobs
                                </h5>
                            </div>
                            <div className={`container d-flex flex-column gap-3 p-3 filter ${styles['filter']}`}>
                                <CheckboxGroup name="Specialization" filters={specialization}/>
                                <Dropdown name="Remote" filters={remote} />
                                <CheckboxGroup name="Employment type" filters={employmentType}/>
                                <Dropdown name="Experience level" filters={experienceLevel}/>
                                <Dropdown name={"Education level"} filters={educationLevel} />
                            </div>
                        </section>
                        <section className="col-lg-9 col-md-8 order-1 order-md-2">
                            <div className="d-flex align-items-center justify-content-between px-2">
                                <div className="text-muted fs-5">
                                    Results: {24}
                                </div>
                                <div className="sortBy">
                                    <h5>Sort by</h5>
                                    <select className="form-select" aria-label="sortBy">
                                        {sortByCategories.map((category) => {
                                            return <option value={category}>{category}</option>;
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="jobs py-2">
                                <Job/>
                                <Job/>
                                <Job/>
                                <Job/>
                                <Job/>
                            </div>
                            <nav aria-label="Job search pages">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled"><a className="page-link" href="#">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </section>
                    </div>
                </div>
            </main>
            </body>
            <Footer/>
        </>
    );
};

export default JobListingPage;