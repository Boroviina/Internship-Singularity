import {useParams} from "react-router-dom";
import React, {useContext} from "react";
import {JobListingItem} from "./JobListingItem";
import classes from './JobListingDetails.module.css';
import {JobListingsContext} from "../../shared/context/job-listings.context";

export const JobListingsDetails = () => {
    const {id} = useParams();
    const jobListingContext = useContext(JobListingsContext);
    const currentJobListing = jobListingContext.jobListings.find(jobListing => jobListing.id === id);

    return (
        <div className="card card-custom">
            <JobListingItem item={currentJobListing} hover={false}/>
            <div className={`card-body ${classes['smaller-margin']}`}>
                <div>{currentJobListing.description}</div><hr/>
                <div>{currentJobListing.requirements}</div><hr/>
                <div>{currentJobListing.applicationInstructions}</div>
            </div>
            <div className="card-footer text-center">
                <button type="button" className="btn btn-lg btn-light-primary w-100 mb-3">
                    Apply now
                </button>
            </div>
        </div>
    );
}