import React from "react";
import {JobListing} from "../../shared/models/job-listing.model";

type JobListingDetailsProps = {
    jobListing: JobListing
}

export const JobListingsDetails: React.FC<JobListingDetailsProps> = (props) => {

    let jobListingDetailsContent = <div className="alert alert-primary text-center" role="alert">
        No job listings found.
    </div>;

    if(props.jobListing) {
        jobListingDetailsContent = <div className="mt-4">
            <hr/>
            <div>{props.jobListing.description}</div><hr/>
            {/*<div>{props.jobListing.requirements.education}</div><hr/>*/}
            <div>{props.jobListing.appInstructions}</div><hr/>

            <div className="text-center">
                <button type="button" className="btn btn-lg btn-light-primary w-100 my-3">
                    Apply now
                </button>
            </div>
        </div>;
    }

    return jobListingDetailsContent;

}