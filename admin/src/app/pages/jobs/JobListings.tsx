import {JobListingItem} from "./JobListingItem";

const DUMMY_JOB_LISTINGS = [
    {
        id: '1',
        job_title: "Job title 1",
        company_name: "Company 1",
        location: "Location 1",
        application_deadline: new Date('2023-06-30')
    },
    {
        id: '2',
        job_title: "Job title 2",
        company_name: "Company 2",
        location: "Location 2",
        application_deadline: new Date('2023-07-12')
    },
    {
        id: '3',
        job_title: "Job title 3",
        company_name: "Company 3",
        location: "Location 3",
        application_deadline: new Date('2023-07-11')
    }
];

export function JobListings() {
    const jobListings = DUMMY_JOB_LISTINGS.map((job_listing) => (
        <JobListingItem
            item={job_listing}
            key={job_listing.id}
        />
    ));

    return (
        <>
            {jobListings}
        </>
    );
}