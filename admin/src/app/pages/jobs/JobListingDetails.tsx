import React from "react";
import {JobListing} from "../../shared/models/job-listing.model";
import {KTSVG} from "../../../_metronic/helpers";

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

            {/*Requirement model*/}
            <div className="d-flex flex-column">
                <li className="d-flex align-items-center py-2">
                    <span className="bullet bg-primary me-5"></span>Education: {props.jobListing.education}
                </li>
                <li className="d-flex align-items-center py-2">
                    <span className="bullet bg-primary me-5"></span>Skills: {props.jobListing.skills}
                </li>
                <li className="d-flex align-items-center py-2">
                    <span className="bullet bg-primary me-5"></span>Languages: {props.jobListing.language}
                </li>
                {props.jobListing.driverLicence && <li className="d-flex align-items-center py-2">
                    <span className="bullet bg-primary me-5"></span>Driver license needed
                </li>}
            </div><hr/>
            {/*End of requirement model*/}

            <div>
                <label className='form-label fw-bolder text-dark fs-6 mb-2'>How to apply?</label> <br/>
                <div className="mb-2">{props.jobListing.appInstructions}</div>
                {props.jobListing.cv && <span>
                    <KTSVG path="/media/icons/duotune/general/gen043.svg" className="svg-icon-2 svg-icon-success" />
                    <span className="mx-1"> CV</span>
                </span>}
                {props.jobListing.coverLetter && <span className="ms-2">
                    <KTSVG path="/media/icons/duotune/general/gen043.svg" className="svg-icon-2 svg-icon-success" />
                    <span className="mx-1"> Cover letter</span>
                </span>}
            </div><hr/>

            <div className="text-center">
                <button type="button" className="btn btn-lg btn-light-primary w-100 my-3">
                    Apply now
                </button>
            </div>
        </div>;
    }

    return jobListingDetailsContent;

}