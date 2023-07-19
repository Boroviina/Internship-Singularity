import React from 'react';
import styles from './jobListingPage.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons/faFilter";
import CheckboxGroup from "./CheckboxGroup";
import DropdownGroup from "./DropdownGroup";

const JobListingPage = () => {
    const filters = ["Type 1", "Type 2", "Type 3"];
    return (
        <body>
        <header className={`mb-5 ${styles['hero']}`}>
            <div className={`text-center ${styles['overlay']}`}>
                <h1 className='display-2 text-light pt-150' style={{paddingTop: '150px'}}>Search for jobs</h1>
            </div>
        </header>
        <section id="jobs-and-filter" className='py-120'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <div className="align-items-center mb-2">
                            <FontAwesomeIcon icon={faFilter}
                                             style={{color: "#198754", height: 30}}/>
                            <h5 className="d-inline align-baseline">Filter jobs</h5>
                        </div>
                            <div className={`container d-flex flex-column gap-3 py-3 filter ${styles['filter']}`}>
                                <CheckboxGroup name="Job Type 1" filters={filters}/>
                                <DropdownGroup name="Job Category 1" filters={filters} />
                                <CheckboxGroup name="Job Type 2" filters={filters}/>
                                <DropdownGroup name="Job Category 2" filters={filters} />
                                <CheckboxGroup name="Job Type 3" filters={filters}/>
                                <DropdownGroup name="Job Category 3" filters={filters} />
                            </div>
                    </div>
                </div>
            </div>
                <div className="col-lg-9 col-md-4">

                </div>
        </section>
</body>
    );
};

export default JobListingPage;