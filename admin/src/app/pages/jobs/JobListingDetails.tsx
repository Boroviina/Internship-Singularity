//import {useParams} from "react-router-dom";
import React from "react";
import {JobListingItem} from "./JobListingItem";
import classes from './JobListingDetails.module.css';

const DUMMY_JOB_LISTING_DETAILS = {
    id: '1',
    job_title: "Job title 1",
    company_name: "Company 1",
    location: "Location 1",
    application_deadline: new Date('2023-06-30'),
    description: 'Some description',
    requirements: 'Some requirements',
    applicationInstructions: 'Some instructions'
};
const {id, job_title, company_name, location, application_deadline} = DUMMY_JOB_LISTING_DETAILS;
const currentJobListingItemInformation = {id, job_title, company_name, location, application_deadline};

export function JobListingsDetails() {
    //const {id} = useParams();

    return (
        <div className="card card-custom">
            <JobListingItem item={currentJobListingItemInformation} hover={false}/>
            <div className={`card-body ${classes['smaller-margin']}`}>
                <div>{DUMMY_JOB_LISTING_DETAILS.description}</div><hr/>
                <div>{DUMMY_JOB_LISTING_DETAILS.requirements}</div><hr/>
                <div>{DUMMY_JOB_LISTING_DETAILS.applicationInstructions}</div>
            </div>
            <div className="card-footer text-center">
                <button type="button" className="btn btn-lg btn-light-primary w-100 mb-3">
                    Apply now
                </button>
            </div>
        </div>
    );
}