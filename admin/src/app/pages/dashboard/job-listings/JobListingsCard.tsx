import React, {useEffect, useState} from "react";
import {getFilteredJobsWithPages} from "../../../shared/services/job.service";
import {JobListingsCardItem} from "./JobListingsCardItem";
// import {getFilteredUsersWithPages} from "../../shared/services/user.service";
// import {UserItem} from "./UserItem";
// import CustomModal from "../../shared/components/CustomModal";
import {Pagination} from "../../../shared/components/Pagination";
import {FilterJobListings} from "./FilterJobListings";
import {CustomDropdown} from "../../../shared/components/CustomDropdown";
import {DatePickerForJobListings} from "./DatePickerForJobListings";
// import {FilterUsers} from "./FilterUsers";
// import {AddUser} from "./AddUser";

export const JobListingsCard = () => {
    const [jobs, setJobs] = useState([]);
    // const [newUser, setNewUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [jobTypeFilter, setJobTypeFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [limit, setLimit] = useState(5);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const fetchJobs = async () => {
        try {
            const response = await getFilteredJobsWithPages(page, {jobType: jobTypeFilter}, limit);
            let {results, totalPages, totalResults} = response;

            if (startDate && endDate) {
                results = results.filter(job => {
                    const jobDate = new Date(job.createdAt);
                    return jobDate >= startDate && jobDate <= endDate;
                });
                totalResults = results.length;
                totalPages = Math.ceil(totalResults / limit);
            }

            if(statusFilter === 'active') {
                const jobListings = results.filter(job => (new Date(job.appDeadline)) < new Date())
                results = jobListings
                totalResults -= jobListings.length;
                totalPages = Math.ceil(totalResults/limit)
            } else if(statusFilter === 'expired') {
                const jobListings = results.filter(job => (new Date(job.appDeadline)) >= new Date())
                results = jobListings
                totalResults -= jobListings.length;
                totalPages = Math.ceil(totalResults/limit)
            }
            setJobs(results);
            setTotalPages(totalPages);
        } catch(error) {
            console.log("Error while getting job listings.");
        }
    }

    useEffect(() => {
        fetchJobs()
    }, [page, jobTypeFilter, statusFilter]); //add filter

    const hideModal = () => {
        setShowModal(false);
    }
    const openModal = () => {
        setShowModal(true);
    };

    return (
        <>

            <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                <div className="fs-1 d-none d-sm-block">Job listings</div>
                <div className="d-flex flex-row">
                    <CustomDropdown
                        buttonTitle="Filter"
                        icon="/media/icons/duotune/general/gen031.svg"
                        options={[{ content:  <FilterJobListings setJobTypeFilter={setJobTypeFilter} setStatusFilter={setStatusFilter} setPage={setPage}/>},]}
                    ></CustomDropdown>
                    <CustomDropdown
                        buttonTitle="Pick dates"
                        icon="/media/icons/duotune/general/gen014.svg"
                        options={[{ content:  <DatePickerForJobListings setStartDate={setStartDate} setEndDate={setEndDate} setPage={setPage}/>},]}
                    />
                </div>
            </div>
            <div className={`w-lg-1024px bg-body rounded shadow-sm p-5 p-lg-5 mx-auto fade-in-up`}>
                <div className="table-responsive">
                    <table className="table gs-4 gy-4 gx-4 mb-0">
                        <thead>
                        <tr className="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
                            <th>Job title</th>
                            {/*<th>ID</th>*/}
                            <th>Job type</th>
                            <th>Created at</th>
                            <th>Status</th>
                            {/*<th>Actions</th>*/}
                        </tr>
                        </thead>
                        <tbody>
                        {jobs && jobs.map(job => (<JobListingsCardItem key={job.id} job={job} update={fetchJobs}></JobListingsCardItem>))}
                        </tbody>
                    </table>
                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        onPageChange={newPage => setPage(newPage)}
                    />
                </div>
            </div>


            {/*<CustomModal*/}
            {/*    title="Add user"*/}
            {/*    show={showModal}*/}
            {/*    onHide={hideModal}*/}
            {/*>*/}
            {/*    <AddUser setNewUser={setNewUser} hideModal={hideModal}/>*/}
            {/*</CustomModal>*/}
        </>
    );
}