import React from 'react';
import {useNavigate} from "react-router-dom";
import './JobListingItem.css';

interface JobListingItemProps {
    item: {
        id: string,
        job_title: string,
        company_name: string,
        location: string,
        application_deadline: Date
    }
}

export const JobListingItem: React.FC<JobListingItemProps> = (props) => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`/job-listings/${props.item.id}`);
    }

    return (
        <div className="card card-custom mb-3">
            <div className="card-header" onClick={clickHandler}>
                <h3 className="card-title">{props.item.job_title}</h3>
                <div className="card-toolbar">

                </div>
            </div>
            <div className="card-body">
                <div>{props.item.company_name}</div>
                <div>{props.item.location}</div>
                <div>{props.item.application_deadline.toLocaleString(undefined, {year: 'numeric', month: 'long', day: 'numeric'})}</div>
            </div>
            <div className="card-footer text-center">
                Footer
            </div>
        </div>
    );
}