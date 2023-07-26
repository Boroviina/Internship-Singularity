import React from "react";
import {CustomCard} from "../../shared/components/layout/CustomCard";
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
            <CustomCard width="75%" className="shadow p-3 my-2 rounded-3">
                <div>{item.job.jobTitle}</div>
                <div>Your contact: {item.phoneNumber}</div>
                {item.cv && <span><i className="bi bi-check-circle-fill" style={{color: '#23db3c'}}></i> CV </span>}
                {item.coverLetter && <span className="ms-2"><i className="bi bi-check-circle-fill" style={{color: '#23db3c'}}></i> Cover letter</span>}
            </CustomCard>
        </>
    )
}