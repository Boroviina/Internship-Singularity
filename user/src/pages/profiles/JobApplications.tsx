import React, {useEffect, useState} from "react";
import {HeaderCard} from "../../shared/components/HeaderCard";
import {CustomCard} from "../../shared/components/layout/CustomCard";
import {getUsersJobApplications} from "../../shared/services/job-application.service";
import {useAuth} from "../../modules/auth";
import {JobApplicationItem} from "./JobApplicationItem";
import {useNavigate} from "react-router-dom";

export const JobApplications = () => {
    const navigate = useNavigate();
    const {currentUser} = useAuth();
    const [loading, setLoading] = useState(false);
    const [jobApplications, setJobApplications] = useState(null)

    useEffect(() => {
        const fetchJobApplications = async () => {
            setLoading(true);
            try {
                const jobApplications = await getUsersJobApplications(`${currentUser.id}`);
                setJobApplications(jobApplications);
            } catch(error) {
                navigate('/error/500');
            }
            setLoading(false);
        }
        fetchJobApplications();
    }, [currentUser.id]);

    let jobApplicationsContent = <div>No job applications</div>;

    if (jobApplications) {
        jobApplicationsContent = jobApplications.map(jobApplication => (
            <JobApplicationItem
                item={jobApplication}
                key={jobApplication.id}
            ></JobApplicationItem>
        ));
    }

    return (
        <>
            <CustomCard width="96%">
                <HeaderCard title="My applications" className="mt-5">All job applications, active and expired</HeaderCard>
                <div className={`row row-cols-md-3 row-cols-sm-2 mx-auto overflow-hidden my-5`}>
                    {jobApplicationsContent}
                </div>
            </CustomCard>
        </>
    )
}