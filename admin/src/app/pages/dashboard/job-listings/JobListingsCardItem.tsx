import React from "react";
import {Jobs} from "../../../shared/models/job-listing.model";
import {JobTypes} from "../../../shared/enums/job-types.enum";

type JobListingsCardItemProps = {
    job: Jobs;
}

export const JobListingsCardItem: React.FC<JobListingsCardItemProps> = (props) => {
    const {
        job,
    } = props

    const expired = (new Date(job.appDeadline)) < new Date();

    return (
        <tr className="fw-semibold text-gray-800 align-middle">
            <td>{job.jobTitle}</td>
            <td>{JobTypes[job.jobType]}</td>
            <td>
                {job.createdAt && (new Date(job.createdAt)).toLocaleString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                })}
            </td>
            {expired ?
                <td><span className="badge badge-light-success">active</span></td> :
                <td><span className="badge badge-light-danger">expired</span></td> }
        </tr>
    )
}