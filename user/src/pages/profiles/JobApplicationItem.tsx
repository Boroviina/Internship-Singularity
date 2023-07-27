import React from "react";
import {JobApplication} from "../../shared/models/job-application.model";

type JobApplicationItemProps = {
    item: JobApplication
}

export const JobApplicationItem: React.FC<JobApplicationItemProps> = (props) => {
    const {
        item
    } = props
    return (
        <>
            <div className={`d-flex flex-wrap items-center p-3 fs-6 border-end border-bottom shadow-sm rounded`}>
                <div>
                    <i className="bi bi-bag-heart" style={{fontSize: '1.3rem', color: '#fb246a'}}></i>
                    <p className="mb-0 mt-1 fw-bold fs-5">{item.job.jobTitle}</p>
                    <div>Your contact: {item.phoneNumber}</div>
                    {item.cv && <span><i className="bi bi-check-circle-fill" style={{color: '#23db3c'}}></i> CV </span>}
                    {item.coverLetter && <span className="ms-2"><i className="bi bi-check-circle-fill" style={{color: '#23db3c'}}></i> Cover letter</span>}
                    </div>
            </div>
        </>
    )
}