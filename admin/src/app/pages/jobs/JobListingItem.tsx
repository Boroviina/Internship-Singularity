import React, {useState} from 'react';
import classes from './JobListingItem.module.css';
import {KTSVG} from "../../../_metronic/helpers";
import {JobListing} from "../../shared/models/job-listing.model";
import {JobListingsDetails} from "./JobListingDetails";
import {useIntl} from "react-intl";

type JobListingItemProps = {
    item: JobListing
}

export const JobListingItem: React.FC<JobListingItemProps> = (props) => {
    const intl = useIntl();

    const [detailsShown, setDetailsShown] = useState(false);

    const clickHandler = () => {
        setDetailsShown(!detailsShown);
    }

    return (
        <div className={`card card-custom mb-3 `}>
            <div className={`card-header ${classes['hover-card']}`} onClick={clickHandler}>
                <h3 className="card-title fw-bolder text-dark">{props.item.jobTitle}</h3>
            </div>
            <div className="card-body">
                <label className='form-label fw-bolder text-dark fs-6 mb-2'>Company name here</label><br/>
                <div className="fv-row">
                    <span className="me-2">
                        <KTSVG path="/media/icons/duotune/maps/map008.svg" className="svg-icon-2 svg-icon-primary" />
                        <span className="mx-1">Location here
                        </span>
                    </span>
                    <span>
                        <KTSVG path="/media/icons/duotune/general/gen013.svg" className="svg-icon-2 svg-icon-primary" />
                        <span className="mx-1">
                            {/*{props.item.appDeadline.toLocaleString(intl.formatMessage({id: 'DATE_FORMAT'}), {year: 'numeric', month: 'long', day: 'numeric'})}*/}
                            {(new Date(props.item.appDeadline)).toLocaleString(intl.formatMessage({id: 'DATE_FORMAT'}), {year: 'numeric', month: 'long', day: 'numeric'})}
                        </span>
                    </span>
                </div>
                {detailsShown && <JobListingsDetails jobListing={props.item}></JobListingsDetails>}
                </div>
        </div>
    );
}