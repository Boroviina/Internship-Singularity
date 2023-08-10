import React, {useEffect, useState} from 'react';
import {JobListing} from "../../shared/models/job-listing.model";
import TimeAgo from "./components/TimeAgo";
import ApplyOrSave from "./components/details-components/ApplyOrSave";

const logo = require('./img/logo-fb.jpg');

interface JobProps {
    job: JobListing;
    showDetails(job: JobListing): void;
    update(): void;
}

const JobListingCard = ({job, showDetails, update} : JobProps) => {

    const clickHandler = (e) => {
      showDetails(job);
    };

    const writeCardInfo = (args: any[]) => {
        return (args.map((el) => {
            return <span key={Math.random().toString()}>{el && ' \u2022 ' + el}</span>;
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
                <div onClick={clickHandler} className={`pointer flex-grow-1`}>
                        <h4 className={`label`}>{job.jobTitle}</h4>
                    <span className="fw-semibold">
                        <span>{job.employer.companyName}</span>
                        <span className="text-black-50">
                            {writeCardInfo([job.location, job.salary, job.employmentType])}
                        </span>
                    </span>
                </div>
            </div>
            <ApplyOrSave job={job} update={update}/>
        </article>
    );
};

export default JobListingCard;