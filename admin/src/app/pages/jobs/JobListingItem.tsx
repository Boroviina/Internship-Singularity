import React, {useState} from 'react';
import classes from './JobListingItem.module.css';
import {KTSVG} from "../../../_metronic/helpers";
import {JobListing} from "../../shared/models/job-listing.model";
import {JobListingsDetails} from "./JobListingDetails";

type JobListingItemProps = {
    item: JobListing
}

export const JobListingItem: React.FC<JobListingItemProps> = (props) => {
    const [detailsShown, setDetailsShown] = useState(false);

    const clickHandler = () => {
        setDetailsShown(!detailsShown);
    }

    return (
        <>
        <div className={`card card-custom mb-3 `}>
            <div className={`card-header ${classes['hover-card']}`} onClick={clickHandler}>
                <h3 className="card-title">{props.item.jobTitle}</h3>
            </div>
            <div className="card-body">
                <div className="card-label"></div>
                <div className="fv-row">
                    <span className="me-2">
                        <KTSVG path="/media/icons/duotune/maps/map008.svg" className="svg-icon-2 svg-icon-primary" />
                        <span className="mx-1">Location here
                        </span>
                    </span>
                    <span>
                        <KTSVG path="/media/icons/duotune/general/gen013.svg" className="svg-icon-2 svg-icon-primary" />
                        <span className="mx-1">
                            {/*{props.item.appDeadline.toLocaleString(undefined, {year: 'numeric', month: 'long', day: 'numeric'})}*/}
                            {(new Date(props.item.appDeadline)).toLocaleString(undefined, {year: 'numeric', month: 'long', day: 'numeric'})}
                        </span>
                    </span>
                </div>
                {detailsShown && <JobListingsDetails jobListing={props.item}></JobListingsDetails>}
                </div>
        </div>
        </>
    );
}