import React, {useEffect, useState} from "react";
import {Header} from "../Header/Header";
import {Footer} from "../generalFooter/Footer";
import {HeaderCard} from "../../shared/components/HeaderCard";
import {CustomCard} from "../../shared/components/layout/CustomCard";
import {getUsersJobApplications} from "../../shared/services/job-application.service";
import {useAuth} from "../../modules/auth";
import {JobApplicationItem} from "./JobApplicationItem";

export const JobApplications = () => {
    const {currentUser} = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [jobApplications, setJobApplications] = useState(null)

    useEffect(() => {
        const fetchJobApplications = async () => {
            setLoading(true);
            setError(null);
            try {
                const jobApplications = await getUsersJobApplications(`${currentUser.id}`);
                setJobApplications(jobApplications);
            } catch(error) {
                setError("Error while trying to get your applications.");
                // navigate('/error');
            }
            setLoading(false);
        }
        fetchJobApplications();
    }, [currentUser.id]);

    let jobApplicationsContent = <div>No job applications</div>;

    if (jobApplications) {
        const usersJobApplications = jobApplications.map(jobApplication => (
            <JobApplicationItem
                item={jobApplication}
                key={jobApplication.id}
            ></JobApplicationItem>
        ));
        jobApplicationsContent = <div>{usersJobApplications}</div>;
    }

    return (
        <>
            <Header/>
            <CustomCard width="96%">
                <HeaderCard title="My applications">All job applications, active and expired</HeaderCard>
                {jobApplicationsContent}
            </CustomCard>
            <Footer/>
        </>
    )
}