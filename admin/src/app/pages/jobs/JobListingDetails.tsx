import React from "react";
import {JobListing} from "../../shared/models/job-listing.model";
import {KTSVG} from "../../../_metronic/helpers";
import {useIntl} from "react-intl";

type JobListingDetailsProps = {
    jobListing: JobListing
}

export const JobListingsDetails: React.FC<JobListingDetailsProps> = (props) => {
    const intl = useIntl();

    let jobListingDetailsContent = <div className="alert alert-primary text-center" role="alert">
        No job listings found.
    </div>;

    if(props.jobListing) {
        jobListingDetailsContent = <div className="mt-4">
            <hr/>
            <div>{props.jobListing.description}</div><hr/>

            {/*Requirement model*/}
            {props.jobListing.requirements && <div className="d-flex flex-column">
                <li className="d-flex align-items-center py-2">
                    <span
                        className="bullet bg-primary me-5"></span>{intl.formatMessage({id: 'JOB_LISTING.LABEL.EDUCATION'})}: {props.jobListing.requirements.education}
                </li>
                <li className="d-flex align-items-center py-2">
                    <span
                        className="bullet bg-primary me-5"></span>{intl.formatMessage({id: 'JOB_LISTING.LABEL.SKILLS'})}: {props.jobListing.requirements.skills}
                </li>
                <li className="d-flex align-items-center py-2">
                    <span
                        className="bullet bg-primary me-5"></span>{intl.formatMessage({id: 'JOB_LISTING.LABEL.LANGUAGES'})}: {props.jobListing.requirements.language}
                </li>
                {props.jobListing.requirements.drivingLicense && <li className="d-flex align-items-center py-2">
                    <span
                        className="bullet bg-primary me-5"></span>{intl.formatMessage({id: 'JOB_LISTING.LABEL.DRIVER_LICENSE'})}
                </li>}
            </div>}<hr/>
            {/*End of requirement model*/}

            <div>
                <label className='form-label fw-bolder text-dark fs-6 mb-2'>{intl.formatMessage({id: 'JOB_LISTING.LABEL.HOW_TO_APPLY'})}</label> <br/>
                <div className="mb-2">{props.jobListing.appInstructions}</div>
                {props.jobListing.cv && <span>
                    <KTSVG path="/media/icons/duotune/general/gen043.svg" className="svg-icon-2 svg-icon-success" />
                    <span className="mx-1"> {intl.formatMessage({id: 'JOB_LISTING.LABEL.CV'})} </span>
                </span>}
                {props.jobListing.coverLetter && <span className="ms-2">
                    <KTSVG path="/media/icons/duotune/general/gen043.svg" className="svg-icon-2 svg-icon-success" />
                    <span className="mx-1"> {intl.formatMessage({id: 'JOB_LISTING.LABEL.COVER_LETTER'})} </span>
                </span>}
            </div>
        </div>;
    }

    return jobListingDetailsContent;

}