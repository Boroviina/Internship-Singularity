import React from 'react';
import {JobListing} from "../../shared/models/job-listing.model";
import TimeAgo from "./components/TimeAgo";

const logo = require('./img/logo-fb.jpg');

interface JobProps {
    job: JobListing;
    showDetails(): void;
}

const JobListingCard = ({job, showDetails} : JobProps) => {
    const writeCardInfo = (args: any[]) => {
        return (args.map((el) => {
            return <span>{el && ' \u2022 ' + el}</span>;
        }));
    };

    return (
        <article className={`d-flex justify-content-between flex-column flex-sm-row w-100 p-3 mb-1 card`}>
            <div className="d-flex align-items-center">
                <a className="me-3" href="src/pages/find-jobs/JobListing#">
                    <img src={logo} className={`p-1`}
                         style={{height: "4rem"}}
                         alt={"Company Logo"}/>
                </a>
                <div onClick={showDetails} className={`pointer flex-grow-1`}>
                        <h4 className={`label`}>{job.jobTitle}</h4>
                    <span className="fw-semibold">
                        <span>{job.employer.companyName}</span>
                        <span className="text-black-50">
                            {writeCardInfo([job.location, job.salary, job.employmentType, TimeAgo(job.createdAt)])}
                        </span>
                    </span>
                </div>
            </div>
            <div className={`d-flex align-items-center gap-2 mt-2 mt-sm-0 mx-3`}>
                <button type="button" className={`btn btn-pink`}>
                    Apply
                </button>
                <button type="button" className={`btn btn-white`}>
                    Save
                </button>
            </div>
        </article>
    );
};

export default JobListingCard;