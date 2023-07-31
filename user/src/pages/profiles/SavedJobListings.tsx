import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {HeaderCard} from "../../shared/components/HeaderCard";
import {CustomCard} from "../../shared/components/layout/CustomCard";
import {getUsersSavedJobs} from "../../shared/services/job-saved.service";
import {useAuth} from "../../modules/auth";

export const SavedJobListings = () => {
    const navigate = useNavigate();
    const {currentUser} = useAuth();
    const [loading, setLoading] = useState(false);
    const [savedJobs, setSavedJobs] = useState(null);

    useEffect(() => {
        const fetchSavedJobs = async () => {
            setLoading(true);
            try {
                const savedJobs = await getUsersSavedJobs(`${currentUser.id}`);
                setSavedJobs(savedJobs);
            } catch(error) {
                navigate('/error/500');
            }
            setLoading(false);
        }
        fetchSavedJobs();
    }, [currentUser.id]);

    return (
        <>
            <CustomCard width="96%">
                <HeaderCard title="Saved listings" className="mt-4">Saved job listings</HeaderCard>
                <CustomCard className="shadow rounded-2 my-4 p-4">
                    saved jobs...
                </CustomCard>
            </CustomCard>
        </>
    )
}