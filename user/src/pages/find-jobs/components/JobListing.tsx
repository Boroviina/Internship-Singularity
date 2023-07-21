import React from 'react';
import styles from './JobListing.module.css';

const logo = require('../../../img/logo-fb.jpg');

const Job = () => {
    return (
        <article className={`d-flex w-100 px-3 py-1 ${styles.jobCard}`}>
                <a className="me-3" href="src/pages/find-jobs/components/JobListing#employer-info">
                    <img src={logo} className={`${styles.logo}`}
                         style={{height: "4rem"}}
                         alt={"Company Logo"}/>
                </a>
            <div className="d-flex flex-column flex-sm-row">
                <div className="flex-grow-1 me-sm-3">
                    <a href="src/pages/find-jobs/components/JobListing#" className="text-dark" style={{textDecoration: "none"}}>
                        <h3 className={styles.title}>Job title</h3>
                    </a>
                    <p className="fw-semibold">
                        <span>Facebook </span>
                        <span className="text-black-50">
                            . Los Angeles . 50$ - 75$ . About a week ago (week ago) . Part time . Until the end of March
                        </span>
                    </p>
                </div>
            <div className="d-flex align-items-center gap-2">
                <button type="button" className="btn btn-primary">
                    Apply
                </button>
                <button type="button" className="btn btn-outline-primary">
                    Save
                </button>
            </div>
            </div>
        </article>
    );
};

export default Job;