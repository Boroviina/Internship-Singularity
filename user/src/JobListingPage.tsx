import React from 'react';
import styles from './jobListingPage.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons/faFilter";
import CheckboxGroup from "./CheckboxGroup";
import Dropdown from "./Dropdown";

const JobListingPage = () => {
    const filters1 = ["Type 1", "Type 2", "Type 3"];
    const filters2 = ["Type 4", "Type 5", "Type 6"];
    const filters3 = ["Type 7", "Type 8", "Type 9"];
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
                            <div className={`container d-flex flex-column gap-3 p-3 filter ${styles['filter']}`}>
                                <CheckboxGroup name="Job Type 1" filters={filters1}/>
                                <CheckboxGroup name="Job Type 2" filters={filters2}/>
                                <Dropdown name="Job type 3" filters={filters3}/>

                                <CheckboxGroup name="Job Type 1" filters={filters1}/>
                                <CheckboxGroup name="Job Type 2" filters={filters2}/>
                                <Dropdown name="Job type 3" filters={filters3}/>
                            </div>
                    </div>
                <div className="col-lg-9 col-md-8">
                    <div className="row gap-lg-2">
                        <div style={{background: "#54a", width: "100%", height: "100px"}}></div>
                        <div style={{background: "#54a", width: "100%", height: "100px"}}></div>
                        <div style={{background: "#54a", width: "100%", height: "100px"}}></div>
                        <div style={{background: "#54a", width: "100%", height: "100px"}}></div>
                    </div>
                </div>
                </div>
            </div>
        </section>
</body>
    );
};

export default JobListingPage;