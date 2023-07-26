import React from 'react';
import styles from './JobListing.module.css';
import generalBtn from "./../../Home/GeneralButton.module.css"

const logo = require('../img/logo-fb.jpg');

interface JobProps {
    showDetails(): void;
}

const JobListing = ({showDetails} : JobProps) => {
    return (
        <article onClick={showDetails} className={`d-flex justify-content-between flex-column flex-sm-row w-100 p-3 ${styles.jobCard}`}>
            <div className="d-flex align-items-center">
                <a className="float-top me-3" href="src/pages/find-jobs/components/JobListing#employer-info">
                    <img src={logo} className={`${styles.logo}`}
                         style={{height: "4rem"}}
                         alt={"Company Logo"}/>
                </a>
                <div className="flex-grow-1 me-sm-3">
                    <a href="src/pages/find-jobs/components/JobListing#" className="text-dark"
                       style={{textDecoration: "none"}}>
                        <h4 className={`${styles.title}`}>Frontend developer</h4>
                    </a>
                    <div className="fw-semibold">
                        <span>Facebook</span>
                        <span className="text-black-50">
                            . Los Angeles . 50$ - 75$ . Part time . About a week ago
                        </span>
                    </div>
                </div>
            </div>
            <div className={`d-flex align-items-center gap-2 mt-2 mt-sm-0 ${styles.alignedButtons}`}>
                <button type="button" className={`${generalBtn.filledButton} ${generalBtn.smallBtn}`}>
                    Apply
                </button>
                <button type="button" className={`${generalBtn.lightButton} ${generalBtn.smallBtn}`}>
                    Save
                </button>
            </div>
        </article>
    );
};

export default JobListing;