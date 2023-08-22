import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {HeaderCard} from "../../shared/components/HeaderCard";
import {CustomCard} from "../../shared/components/layout/CustomCard";
import {useAuth} from "../../modules/auth";
import {getUsersSavedJobs,} from "../../shared/services/job-saved.service";
import {JobListing} from "../../shared/models/job-listing.model";
import JobListingCard from "../find-jobs/JobListingCard";
import DetailsModal from "../find-jobs/DetailsModal";

export const SavedJobListings = () => {
    const navigate = useNavigate();
    const {currentUser} = useAuth();
    const [savedJobs, setSavedJobs] = useState(null);
    const [shownJob, setShownJob] = useState<JobListing>(null);
    const [showDetails, setShowDetails] = useState(false);

    const handleClose = () => setShowDetails(false);
    const handleOpen = (job: JobListing) => {
        setShownJob(job);
        setShowDetails(true)
    };

    const fetchSavedJobs = async () => {
        try {
            const savedjobs = await getUsersSavedJobs(`${currentUser.id}`);
            setSavedJobs(savedjobs);
        } catch (error) {
            navigate('/error/500');
        }
    }

    useEffect(() => {
        fetchSavedJobs();
    }, []);

    let savedJobsContent = <div className="text-label">No saved job listings.</div>;

    if (savedJobs) {
        if (savedJobs.length > 0) {
            savedJobsContent = savedJobs.map(savedJob => (
                <JobListingCard job={savedJob.job} showDetails={handleOpen} key={savedJob.job.id} update={fetchSavedJobs}/>
            ))
        }
    }

    return (
        <>
            <CustomCard width="96%">
                <HeaderCard title="Saved listings" className="mt-4">Your saved job listings</HeaderCard>
                <CustomCard className="shadow border-radius my-4 p-4 card-bg">
                    {savedJobsContent}
                </CustomCard>
            </CustomCard>
            {shownJob && <DetailsModal job={shownJob} showDetails={showDetails} close={handleClose} update={fetchSavedJobs}/>}
        </>
    )
}