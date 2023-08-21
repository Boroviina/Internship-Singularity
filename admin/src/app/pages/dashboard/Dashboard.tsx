import React, {useEffect, useState} from "react";
import PieChart from "./charts/PieChart";
import LineChart from "./charts/LineChart";
// import {getNumberOfAdmins, getNumberOfEmployers, getNumberOfUsers} from "../../shared/services/user.service";
import {getJobsWithoutLimit} from "../../shared/services/job.service";
import {getJobApplicationsPerJob} from "../../shared/services/job-application.service";
import {getSavedJobsPerJob} from "../../shared/services/api-client/job-saved.service";
import {JobTypes} from "../../shared/enums/job-types.enum";
import {JobListingsCard} from "./job-listings/JobListingsCard";

export function Dashboard() {
    const [jobs, setJobs] = useState([]);
    const [jobApplicationsPerJob, setJobApplicationsPerJob] = useState<number[]>([]);
    const [savedJobsPerJob, setSavedJobsPerJob] = useState<number[]>([]);
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
        jobs.forEach(job => {
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
        jobs.forEach(job => {
            if(job.jobType === jobType) {
                number++;
            }
        })
        return number;
    }

    const getNumberOfJobApplicationsPerJobType = (jobType): number => {
        let number = 0;
        jobs.forEach((job, index) => {
            if(job.jobType === jobType) {
                number += jobApplicationsPerJob[index]
            }
        })
        return number;
    }

    const getNumberOfSavedJobListingsPerJobType = (jobType): number => {
        let number = 0;
        jobs.forEach((job, index)=> {
            if(job.jobType === jobType) {
                number += savedJobsPerJob[index]
            }
        })
        return number;
    }

    const getNumberOfJobListingsPerMonthInAYear = (): number[] => {
        const jobsPerMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        jobs.forEach(job => {
            const month = (new Date(job.createdAt)).getMonth();
            jobsPerMonth[month]++;
        })
        return jobsPerMonth;
    }

    return (
        <div>
            <div className="row">
                <JobListingsCard/>
            </div>
            <div className="row mt-10">
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
            <div className="row mt-10">
                <LineChart
                    labels={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
                    datasets={[
                        {
                            label: 'Job listings',
                            data: getNumberOfJobListingsPerMonthInAYear(),
                            borderColor: 'rgba(75, 192, 192, 1)',
                            fill: false,
                        },
                    ]}
                />
            </div>
        </div>
    );
}
