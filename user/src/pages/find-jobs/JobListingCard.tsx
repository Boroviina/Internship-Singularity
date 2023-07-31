import React from 'react';
import styles from './components/JobListing.module.css';
import generalBtn from "../Home/GeneralButton.module.css"
import {JobListing} from "../../shared/models/job-listing.model";

const logo = require('./img/logo-fb.jpg');

interface JobProps {
    job: JobListing;
    showDetails(): void;
}

const JobListingCard = ({job, showDetails} : JobProps) => {
    return (
        <article className={`d-flex justify-content-between flex-column flex-sm-row w-100 p-3 ${styles.jobCard}`}>
            <div className="d-flex align-items-center">
                <a className="me-3" href="src/pages/find-jobs/JobListing#">
                    <img src={logo} className={`${styles.logo}`}
                         style={{height: "4rem"}}
                         alt={"Company Logo"}/>
                </a>
                <div onClick={showDetails} className={`${styles.titleAndDetails} flex-grow-1`}>
                        <h4 className={`${styles.title}`}>{job.jobTitle}</h4>
                    <div className="d-flex align-items-center gap-2 fw-semibold">
                        <span>{job.companyName}</span>
                        <span className="text-black-50">
                                <span>{job.location}{' \u2022 '}</span>
                                <span>{job.pay}{' \u2022 '}</span>
                                <span>{job.employmentType}{' \u2022 '}</span>
                                <span>Posted on: {job.datePosted}</span>
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

export default JobListingCard;