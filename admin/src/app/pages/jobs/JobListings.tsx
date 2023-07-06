import React, {useEffect, useState} from "react";
import {JobListingItem} from "./JobListingItem";
import {getJobs} from "../../shared/services/job.service";

export const JobListings = () => {
    const [jobListings, setJobListings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobListings = async () => {
            setLoading(true);
            setError(null);
            try {
                const jobs = await getJobs();
                setJobListings(jobs);
                setLoading(false);
            } catch(error) {
                setError("Error while getting job listings.");
            }
        }
        fetchJobListings();
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