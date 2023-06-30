import React, {useEffect, useState} from 'react';
import {JobListingModel} from "../models/job-listing.model";
import {WithChildren} from "../../../_metronic/helpers";

const DUMMY_JOB_LISTINGS: JobListingModel[] = [
    {
        id: '1',
        job_title: "Job title 1",
        company_name: "Company 1",
        location: "Location 1",
        application_deadline: new Date('2023-06-30'),
        description: 'Description 1',
        requirements: 'Requirements 1',
        applicationInstructions: 'Instructions 1'
    },
    {
        id: '2',
        job_title: "Job title 2",
        company_name: "Company 2",
        location: "Location 2",
        application_deadline: new Date('2023-07-12'),
        description: 'Description 2',
        requirements: 'Requirements 2',
        applicationInstructions: 'Instructions 2'
    },
    {
        id: '3',
        job_title: "Job title 3",
        company_name: "Company 3",
        location: "Location 3",
        application_deadline: new Date('2023-07-11'),
        description: 'Description 3',
        requirements: 'Requirements 3',
        applicationInstructions: 'Instructions 3'
    }
];

type JobListingsContextProps = {
    jobListings: JobListingModel[] | undefined;
}

const initJobListingsContextPropsState = {
    jobListings: []
}

export const JobListingsContext = React.createContext<JobListingsContextProps | undefined>(initJobListingsContextPropsState);

export const JobListingsProvider: React.FC<WithChildren> = ({children}) => {
    const [jobListings, setJobListings] = useState<JobListingModel[] | undefined>([]);

    useEffect(() => {
        //fetch job listings from server
        setJobListings(DUMMY_JOB_LISTINGS);
    }, []);

    return (
        <JobListingsContext.Provider value={{jobListings}}>
            {children}
        </JobListingsContext.Provider>
    );
}




