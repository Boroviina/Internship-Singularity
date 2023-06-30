import {useContext} from "react";
import {JobListingItem} from "./JobListingItem";
import {JobListingsContext} from "../../shared/context/job-listings.context";

export const JobListings = () => {
    const jobListingContext = useContext(JobListingsContext);

    const jobListings= jobListingContext.jobListings.map(job_listing => (
        <JobListingItem
            item={job_listing}
            key={job_listing.id}
            hover={true}
        />
    ));

    return (
        <>
            {jobListings && jobListings}
            {!jobListings &&
                <div className="alert alert-primary text-center" role="alert">
                    No job listings found.
                </div>
            }
        </>
    );
}