import React, {useEffect, useState} from "react";
import PieChart from "./charts/PieChart";
// import {getNumberOfAdmins, getNumberOfEmployers, getNumberOfUsers} from "../../shared/services/user.service";
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

    useEffect(() => {
        // fetchUsers()
        fetchJobs()
            .then(() => getJobTypes());
    }, [jobs.length]);

    const fetchJobs = async () => {
        try {
            const response = await getJobsWithoutLimit();
            setJobs(response.results);

            const applicationPromises = [];
            const savedJobPromises = [];

            response.results.forEach(job => {
                const jobAppPromise = getJobApplicationsPerJob(job.id);
                const savedJobPromise = getSavedJobsPerJob(job.id);

                applicationPromises.push(jobAppPromise);
                savedJobPromises.push(savedJobPromise);
            });

            const applicationResults = await Promise.all(applicationPromises);
            const savedJobResults = await Promise.all(savedJobPromises);

            const applications = applicationResults.map(result => result);
            const savedJobs = savedJobResults.map(result => result);

            setJobApplicationsPerJob(applications);
            setSavedJobsPerJob(savedJobs);
        } catch(error) {
            console.log("Error while getting jobs.");
        }
    }

    const getJobTypes = () => {
        const types = [];
        jobs.map(job => {
            if(!types.includes(job.jobType)) {
                types.push(job.jobType)
            }
        })
        setJobTypes(types)
    }

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
                    {jobTypes.length > 0 && <PieChart
                        data={jobTypes.map((jobType) => (getNumberOfJobsPerJobType(jobType)))}
                        labels={jobTypes.map((jobType) => (JobTypes[jobType]))}
                    />}
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
        </div>
    );
}
