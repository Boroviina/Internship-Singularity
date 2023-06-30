import React from 'react';
import {useNavigate} from "react-router-dom";
import classes from './JobListingItem.module.css';
import {KTSVG} from "../../../_metronic/helpers";
import {JobListingModel} from "../../shared/models/job-listing.model";

type JobListingItemProps = {
    item: JobListingModel
    hover: boolean
}

export const JobListingItem: React.FC<JobListingItemProps> = (props) => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`/job-listings/${props.item.id}`);
    }

    return (
        <div className={`card card-custom mb-3 ${props.hover && classes['hover-card']}`}  onClick={clickHandler}>
            <div className="card-header">
                <h3 className="card-title">{props.item.job_title}</h3>
            </div>
            <div className="card-body">
                <div className="card-label mt-0">{props.item.company_name}</div>
                <div className="fv-row">
                    <span>
                        <KTSVG path="/media/icons/duotune/maps/map008.svg" className="svg-icon-2 svg-icon-primary" />
                        <span className="me-2">
                            {props.item.location}
                        </span>
                    </span>
                    <span>
                        <KTSVG path="/media/icons/duotune/general/gen013.svg" className="svg-icon-2 svg-icon-primary" />
                        <span>
                            {props.item.application_deadline.toLocaleString(undefined, {year: 'numeric', month: 'long', day: 'numeric'})}
                        </span>
                    </span>
                </div>
                </div>
        </div>
    );
}