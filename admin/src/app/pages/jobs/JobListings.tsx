import React, {useEffect, useState} from "react";
import {JobListingItem} from "./JobListingItem";
import {getJobs} from "../../shared/services/job.service";
import {Alert} from "../../shared/components/Alert";
import {Spinner} from "react-bootstrap";

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
            } catch(error) {
                setError("Error while getting job listings.");
            }
            setLoading(false);
        }
        fetchJobListings();
    }, []);

    let jobListingsContent = <Alert state="primary" icon="icons/duotune/general/gen021.svg">No job listing found...</Alert>;

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
        <>
            {loading &&  <div className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
                <div className="text-center">
                    <Spinner animation="border"></Spinner>
                </div>
            </div>}
            {!loading && error && <Alert state="danger" icon="icons/duotune/general/gen040.svg">{error}</Alert>}
            {!loading && !error && jobListingsContent}
        </>
    );
}