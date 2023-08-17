import React, {useEffect, useState} from "react";
import BarChart from "./charts/BarChart";
import PolarAreaChart from "./charts/PolarAreaChart";
import DoughnutChart from "./charts/DoughnutChart";
import {
    getNumberOfAdmins,
    getNumberOfEmployers,
    getNumberOfUsers
} from "../../shared/services/user.service";
import {getJobsWithPages} from "../../shared/services/job.service";
import {getJobApplicationsPerJob} from "../../shared/services/job-application.service";
import {JobListing} from "../../shared/models/job-listing.model";

export function Dashboard() {

    const [users, setUsers] = useState(0);
    const [employers, setEmployers] = useState(0);
    const [admins, setAdmins] = useState(0);
    const [jobs, setJobs] = useState([]);
    const [jobApplicationsPerJob, setJobApplicationsPerJob] = useState(0);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchUsers = async () => {
        try {
            const numberOfEmployers = await getNumberOfEmployers();
            const numberOfUsers = await getNumberOfUsers();
            const numberOfAdmins = await getNumberOfAdmins();
            setEmployers(numberOfEmployers)
            setUsers(numberOfUsers);
            setAdmins(numberOfAdmins);
        } catch(error) {
            console.log("Error while getting users.");
        }
    }

    const fetchJobs = async () => {
        try {
            const response = await getJobsWithPages(page);
            const {results, totalPages} = response;
            setJobs(results.leng);
            setTotalPages(totalPages);
        } catch(error) {
            console.log("Error while getting jobs.");
        }
    }

    const fetchJobApplicationsPerJob = async (job: JobListing) => {
        try {
            const numberOfJobAplications = await getJobApplicationsPerJob(job.id);
            return numberOfJobAplications
        } catch(error) {
            console.log(error)
            return 0;
        }
    }

    useEffect(() => {
        fetchUsers()
        fetchJobs()
    }, [users, employers, admins, page]);

    // Sample data
    const employersData = [15, 20, 25]; // Replace with actual data
    const jobSeekersData = [10, 18, 22]; // Replace with actual data
    const labels = ['January', 'February', 'March']; // Replace with labels
    const polarAreaData = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [
            {
                data: [10, 20, 15, 30, 25],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
            },
        ],
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h1>Job portal users</h1>
                    <DoughnutChart data={[users, employers]} labels={['Job seekers', 'Employers']} />
                </div>
                <div className="col-md-6">
                    <h1>All Job Radar users</h1>
                    <DoughnutChart data={[users, employers, admins]} labels={['Job seekers', 'Employers', 'Admins']} />
                </div>
            </div>
            <div className="row mt-10">
                <div className="col-md-12">
                    <h3>Job Applications per Job</h3>
                    {/*<BarChart data={jobs.map(job => fetchJobApplicationsPerJob(job))} labels={jobs.map(job => job.jobTitle)} title="Job applications" />*/}
                </div>
            </div>
            <div className="row mt-10">
                <div className="col-md-6">
                    <h1>Job listings</h1>
                    <PolarAreaChart data={ [10, 20, 15, 30, 25]} labels={['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5']} />
                </div>
            </div>

            <h2>Metrics Dashboard</h2>

            <div>
                <h3>Number of Job Seekers</h3>
                <BarChart data={jobSeekersData} labels={labels} title="Job Seekers" />
            </div>
        </div>
    );
}
