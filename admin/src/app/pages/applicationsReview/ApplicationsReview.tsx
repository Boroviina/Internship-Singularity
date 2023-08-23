import React, {useEffect, useState} from "react";
import {KTSVG, toAbsoluteUrl} from "../../../_metronic/helpers";
import {useNavigate, useParams} from "react-router-dom";
import {ReviewItem} from "./ReviewItem";
import {getJob} from '../../shared/services/job.service';
import {getApplicationsPerJob} from "../../shared/services/job-application.service";


export function ApplicationsReview() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [jobTitle, setJobTitle] = useState(null);
    const [jobApplications, setJobApplications]=useState(null);
    const {id} = useParams();

    useEffect(() => {
        const fetchJobAppsDetails = async () => {
            setLoading(true);
            setError(null);
            try{
                const job= await getJob(id);
                const jobApps=await getApplicationsPerJob(id);
                setJobTitle(job.jobTitle);
                setJobApplications(jobApps);
                console.log("Job applications:", jobApps);
            }catch (error){
                setError("Error while trying to review applications");
                navigate('/error');
            }
            setLoading(false);
        }
        fetchJobAppsDetails();
    }, [id]);

    let jobAppContent=<div className={'display-2 text-dark'}>No job apps</div>
    if(jobApplications){
        jobAppContent=jobApplications.map(jobApplication=>
           (<ReviewItem item={jobApplication}
            key={jobApplication.id}/>)
        );
    }
    return <div className={'container'}>
        <div className={'d-flex justify-content-between align-items-center'}>
            <button className={'btn btn-light-dark col-1 m-5'} onClick={() => navigate('/job-listings')}>
                <KTSVG path={`/media/icons/duotune/arrows/arr021.svg`}
                       className={'svg-icon svg-icon-2x  svg-icon-'}/>
            </button>
            <h1 className={'display-3 col-10'}>{jobTitle}</h1>
        </div>
        <div className={'my-5 py-4'}>
            <h4 className={'display-5 mt-5 '}>List of applications</h4>
        </div>
        <div className={'container d-flex flex-column mt-5'}>
            {jobAppContent}
        </div>
    </div>;
}