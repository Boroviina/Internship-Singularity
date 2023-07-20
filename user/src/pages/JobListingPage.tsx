import React from 'react';
import styles from './jobListingPage.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons/faFilter";
import CheckboxGroup from "../components/CheckboxGroup";
import Dropdown from "../components/Dropdown";
import Job from "../components/JobListing";

const JobListingPage = () => {
    const filters1 = ["Type 1", "Type 2", "Type 3"];
    const filters2 = ["Type 4", "Type 5", "Type 6"];
    const filters3 = ["Type 7", "Type 8", "Type 9"];
    return (
        <body>
        <header className={`mb-5 ${styles['hero']}`}>
            <div className={`text-center ${styles['overlay']}`}>
                <h1 className='display-2 text-light' style={{paddingTop: '150px'}}>
                    Search for jobs
                </h1>
            </div>
        </header>
        <main id="jobs-and-filter">
            <div className="container">
                <div className="row">
                    <section className="col-lg-3 col-md-4 order-2 order-md-1">
                        <div className="align-items-center mb-2">
                            <FontAwesomeIcon icon={faFilter}
                                             style={{color: "#198754", height: 30}}/>
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
                    <div className="row row-gap-lg-2">
                        <Job />
                        <Job />
                        <Job />
                        <Job />
                        <Job />
                    </div>
                </section>
                </div>
            </div>
        </main>
</body>
    );
};

export default JobListingPage;