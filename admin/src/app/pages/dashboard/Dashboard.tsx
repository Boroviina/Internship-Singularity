import React, {useEffect, useState} from "react";
import BarChart from "./charts/BarChart";
import DoughnutChart from "./charts/DoughnutChart";
import PieChart from "./charts/PieChart";
import {getNumberOfAdmins, getNumberOfEmployers, getNumberOfUsers} from "../../shared/services/user.service";
import {getJobsWithoutLimit} from "../../shared/services/job.service";
import {getJobApplicationsPerJob} from "../../shared/services/job-application.service";
import {getSavedJobsPerJob} from "../../shared/services/api-client/job-saved.service";
import {JobTypes} from "../../shared/enums/job-types.enum";

export function Dashboard() {

    // const [users, setUsers] = useState(0);
    // const [employers, setEmployers] = useState(0);
    // const [admins, setAdmins] = useState(0);
    const [jobs, setJobs] = useState([]);
    // const [activeJobs, setActiveJobs] = useState(10);
    // const [inactiveJobs, setInactiveJobs] = useState(3);
    const [jobApplicationsPerJob, setJobApplicationsPerJob] = useState<number[]>([]);
    const [savedJobsPerJob, setSavedJobsPerJob] = useState<number[]>([]);
    // const [page, setPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(1);
    const [jobTypes, setJobTypes] = useState([]);

    const fetchJobs = async () => {
        try {
            const response = await getJobsWithoutLimit();
            const {results} = response;
            setJobs(response.results);

            results.map(async job => {
                try {
                    const numberOfJobApplications = await getJobApplicationsPerJob(job.id);
                    const numberOfSavedJobs = await getSavedJobsPerJob(job.id);
                    setJobApplicationsPerJob((previousState) => [...previousState, numberOfJobApplications])
                    setSavedJobsPerJob((previousState) => [...previousState, numberOfSavedJobs])
                } catch (error) {
                    console.log(error)
                }
            })
        } catch(error) {
            console.log("Error while getting jobs.");
        }
    }

    useEffect(() => {
        // fetchUsers()
        fetchJobs()
        getJobTypes();
    }, []);


    // const fetchUsers = async () => {
    //     try {
    //         const numberOfEmployers = await getNumberOfEmployers();
    //         const numberOfUsers = await getNumberOfUsers();
    //         const numberOfAdmins = await getNumberOfAdmins();
    //         setEmployers(numberOfEmployers)
    //         setUsers(numberOfUsers);
    //         setAdmins(numberOfAdmins);
    //     } catch(error) {
    //         console.log("Error while getting users.");
    //     }
    // }

    const getJobTypes = () => {
        const types = [];
        jobs.map(job => {
            if(!types.includes(job.jobType)) {
                types.push(job.jobType)
            }
        })
        setJobTypes(types)
    }

    const getNumberOfJobsPerJobType = (jobType): number => {
        let number = 0;
        jobs.map(job => {
            if(job.jobType === jobType) {
                number++;
            }
        })
        return number;
    }

    const getNumberOfJobApplicationsPerJobType = (jobType): number => {
        let number = 0;
        jobs.map((job, index)=> {
            if(job.jobType === jobType) {
                number += jobApplicationsPerJob[index]
            }
        })
        return number;
    }

    const getNumberOfSavedJobListingsPerJobType = (jobType): number => {
        let number = 0;
        jobs.map((job, index)=> {
            if(job.jobType === jobType) {
                number += savedJobsPerJob[index]
            }
        })
        return number;
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <h2>Number of job listings per type of job</h2>
                    <PieChart
                        data={jobTypes.map((jobType) => (getNumberOfJobsPerJobType(jobType)))}
                        labels={jobTypes.map((jobType) => (JobTypes[jobType]))}
                    />
                </div>
                <div className="col-md-4">
                    <h2>Number of job applications per type of job</h2>
                    <PieChart
                        data={jobTypes.map((jobType) => (getNumberOfJobApplicationsPerJobType(jobType)))}
                        labels={jobTypes.map((jobType) => (JobTypes[jobType]))}
                    />
                </div>
                <div className="col-md-4">
                    <h2>Number of saved job listings per type of job</h2>
                    <PieChart
                        data={jobTypes.map((jobType) => (getNumberOfSavedJobListingsPerJobType(jobType)))}
                        labels={jobTypes.map((jobType) => (JobTypes[jobType]))}
                    />
                </div>
            </div>
            {/*<div className="row mt-10">*/}
            {/*    <div className="col-md-6">*/}
            {/*        <h1>Job portal users</h1>*/}
            {/*        <DoughnutChart data={[users, employers]} labels={['Job seekers', 'Employers']} />*/}
            {/*    </div>*/}
            {/*    <div className="col-md-6">*/}
            {/*        <h1>All Job Radar users</h1>*/}
            {/*        <DoughnutChart data={[users, employers, admins]} labels={['Job seekers', 'Employers', 'Admins']} />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}
