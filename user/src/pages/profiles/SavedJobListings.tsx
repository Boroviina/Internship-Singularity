import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {HeaderCard} from "../../shared/components/HeaderCard";
import {CustomCard} from "../../shared/components/layout/CustomCard";
import {useAuth} from "../../modules/auth";
import {getUsersSavedJobs} from "../../shared/services/job-saved.service";

export const SavedJobListings = () => {
    const navigate = useNavigate();
    const {currentUser} = useAuth();
    const [loading, setLoading] = useState(false);
    const [savedJobs, setSavedJobs] = useState(null);

    useEffect(() => {
        const fetchSavedJobs = async () => {
            setLoading(true);
            try {
                const savedjobs = await getUsersSavedJobs(`${currentUser.id}`);
                setSavedJobs(savedjobs);

            } catch(error) {
                navigate('/error/500');
            }
            setLoading(false);
        }
        fetchSavedJobs();
    }, [currentUser.id]);

    let savedJobsContent = <div>No saved job listings.</div>;

    if (savedJobs) {
        savedJobsContent = savedJobs.map(savedJob => (
            //add job listing component
            <div key={savedJob.job.id}>{savedJob.job.jobTitle}</div>
        ))}

    return (
        <>
            <CustomCard width="96%">
                <HeaderCard title="Saved listings" className="mt-4">Saved job listings</HeaderCard>
                <CustomCard className="shadow rounded-2 my-4 p-4">
                    {savedJobsContent}
                </CustomCard>
            </CustomCard>
        </>
    )
}