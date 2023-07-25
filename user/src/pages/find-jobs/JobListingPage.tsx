import React from 'react';
import styles from './jobListingPage.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons/faFilter";
import CheckboxGroup from "./components/CheckboxGroup";
import Dropdown from "./components/Dropdown";
import Job from "./components/JobListing";
import {Header} from "../Header/Header";
import {Footer} from "../generalFooter/Footer";

const JobListingPage = () => {
    const filters1 = ["Type 1", "Type 2", "Type 3"];
    const filters2 = ["Type 4", "Type 5", "Type 6"];
    const filters3 = ["Type 7", "Type 8", "Type 9"];
    const categories = ["Relevance", "Date", "Pay", "Remote policy", "Working hours"];
    return (
        <>
            <Header/>
            <body>
            <header className={`mb-5 ${styles.hero}`}>
                <div className={`text-center ${styles.overlay}`}>
                    <div className="container">
                        <h1 className='display-2 text-light' style={{paddingTop: '150px'}}>
                            Search for jobs
                        </h1>
                        <div className="input-group input-group-lg d-flex flex-column flex-sm-row flex-nowrap mt-4">
                            <input type="text" className="form-control fs-6 w-auto"
                                   placeholder="Job title or keywords" aria-label="Keyword search" />
                                <input type="text" className="form-control fs-6 w-auto"
                                       placeholder="Address, city or country" aria-label="Location search" />
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </header>
            <main id="jobs-and-filter">
                <div className="container">
                    <div className="row">
                        <section className="col-lg-3 col-md-4 order-2 order-md-1">
                            <div className="align-items-center mb-2">
                                <FontAwesomeIcon icon={faFilter}
                                                 style={{color: "#614EE0FF", height: 30}}/>
                                <h5 className="d-inline align-baseline">
                                    Filter jobs
                                </h5>
                            </div>
                            <div className={`container d-flex flex-column gap-3 p-3 filter ${styles['filter']}`}>
                                <CheckboxGroup name="Job Type 1" filters={filters1}/>
                                <Dropdown name="Job type 3" filters={filters3}/>
                                <CheckboxGroup name="Job Type 2" filters={filters2}/>
                                <hr/>
                                <CheckboxGroup name="Job Type 1" filters={filters1}/>
                                <CheckboxGroup name="Job Type 2" filters={filters2}/>
                                <Dropdown name="Job type 3" filters={filters3}/>
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
                                        {categories.map((category) => {
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