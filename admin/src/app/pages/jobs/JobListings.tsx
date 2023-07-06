import {useEffect, useState} from "react";
import {JobListingItem} from "./JobListingItem";
import {JobListing} from "../../shared/models/job-listing.model";
import {RequirementsModel} from "../../shared/models/requirements.model";

const DUMMY_JOB_LISTINGS: JobListing[] = [
    new JobListing({
        id: '11',
        jobTitle: "Job title 1",
        companyName: "Company 1",
        location: "Location 1",
        applicationDeadline: new Date('2023-06-30'),
        description: 'Description 1',
        requirements: new RequirementsModel({
            education: "education 1",
            skills: "skill 1",
            language: "en",
            driverLicense: true
        }),
        applicationInstructions: 'Instructions 1',
        positionNumber: 4,
        cv: true,
        coverLetter: false
    }),
    new JobListing({
        id: '12',
        jobTitle: "Job title 2",
        companyName: "Company 2",
        location: "Location 2",
        applicationDeadline: new Date('2023-07-12'),
        description: 'Description 2',
        requirements: new RequirementsModel({
            education: "education 2",
            skills: "skill 2",
            language: "en",
            driverLicense: true
        }),
        applicationInstructions: 'Instructions 2',
        positionNumber: 4,
        cv: true,
        coverLetter: false
    }),
    new JobListing({
        id: '13',
        jobTitle: "Job title 3",
        companyName: "Company 3",
        location: "Location 3",
        applicationDeadline: new Date('2023-07-11'),
        description: 'Description 3',
        requirements: new RequirementsModel({
            education: "education 3",
            skills: "skill 3",
            language: "en",
            driverLicense: true
        }),
        applicationInstructions: 'Instructions 3',
        positionNumber: 4,
        cv: true,
        coverLetter: false
    })
];

export const JobListings = () => {
    const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
        //fetch job listings
        setJobListings(DUMMY_JOB_LISTINGS);
    }, []);

    let jobListingsContent = <div className="alert alert-primary text-center" role="alert">
        No job listings found.
    </div>;

    if (jobListings) {
        const currentJobListings = jobListings.map(jobListing => (
            <JobListingItem
                key={jobListing.id}
                item={jobListing}
            />
        ));
        jobListingsContent = <div>{currentJobListings}</div>;
    }

    return (
        jobListingsContent
    );
}