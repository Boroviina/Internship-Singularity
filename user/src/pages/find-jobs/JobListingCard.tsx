import React from 'react';
import {JobListing} from "../../shared/models/job-listing.model";
import ApplyOrSave from "./components/details-components/ApplyOrSave";
import TimeAgo from "./components/TimeAgo";

import logo from "./img/company-logo.jpg";

interface JobProps {
    job: JobListing;
    showDetails(job: JobListing): void;
    update(): void;
    isJobSaved?: boolean;
}

const JobListingCard = ({job, showDetails, update, isJobSaved} : JobProps) => {

    const clickHandler = (e) => showDetails(job);

    const writeCardInfo = (args: any[]) => {
        return args.map((el) => <span key={Math.random().toString()}>{el && ' \u2022 ' + el}</span>);
    };

    return (
        <article className={`d-flex justify-content-between flex-column flex-sm-row w-100 p-3 mb-1 card`} style={{maxWidth: "1200px"}}>
            <div className="d-flex align-items-center">
                <a className="me-3" href="#">
                    <img src={logo} className={`p-1`}
                         style={{height: "4rem"}}
                         alt={"Company Logo"}/>
                </a>
                <div onClick={clickHandler} className={`pointer flex-grow-1`}>
                        <h4 className={`label`}>{job.title}</h4>
                    <span className="fw-semibold">
                        <span>{job.employer.companyName}</span>
                        <span className="text-black-50">
                            {writeCardInfo([job.location, job.salary + " €", job.employmentType, TimeAgo(job.createdAt)])}
                        </span>
                    </span>
                </div>
            </div>
            <ApplyOrSave job={job} update={update} isJobSaved={isJobSaved}/>
        </article>
    );
};

export default JobListingCard;