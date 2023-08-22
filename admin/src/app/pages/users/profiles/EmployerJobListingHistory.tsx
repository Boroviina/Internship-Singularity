import React, {useEffect, useState} from "react";
import {Employer} from "../../../shared/models/employer.model";
import {getJobsByEmployerId} from "../../../shared/services/job.service";
import {JobListingItem} from "../../jobs/JobListingItem";

type EmployerJobListingHistoryProps = {
    employer: Employer
}

export const EmployerJobListingHistory: React.FC<EmployerJobListingHistoryProps> = (props) => {
    const {
        employer
    } = props

    const [jobs, setJobs] = useState([]);

    const fetchEmployerJobs = async () => {
        try {
            // const id = employer.id
            const result = await getJobsByEmployerId(employer.id);
            if(result) {
                setJobs(result);
            } else {
                throw new Error("Error while getting employer jobs")
            }
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchEmployerJobs()
    }, []);

    return (
        <>
            {employer && <div className="mx-auto shadow-lg rounded overflow-hidden pt-3 mb-3 border bg-body">
                <div className="fs-4 border-bottom p-3 fw-bold mb-3 text-label">Job listing history</div>
                <div className="overflow-auto" style={{maxHeight: '550px'}}>
                    {jobs && jobs.map(job => <div key={job.id} className="m-10 border rounded shadow"><JobListingItem key={job.id} item={job} update={fetchEmployerJobs}/></div>)}
                </div>
            </div>}
        </>
    )
}