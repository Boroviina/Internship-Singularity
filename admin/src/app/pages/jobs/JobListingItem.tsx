import React, {useState} from 'react';
import classes from './JobListingItem.module.css';
import {KTSVG} from "../../../_metronic/helpers";
import {JobListing} from "../../shared/models/job-listing.model";
import {JobListingsDetails} from "./JobListingDetails";
import {useIntl} from "react-intl";
import {useNavigate} from "react-router-dom";
import {DeleteJobModal} from "../post-job/DeleteJobModal";
import {MenuToggleButton} from "./MenuToggleButton";


type JobListingItemProps = {
    item: JobListing,
    update: () => {}
}

export const JobListingItem: React.FC<JobListingItemProps> = (props) => {
    const intl = useIntl();
    const navigate = useNavigate();
    const [detailsShown, setDetailsShown] = useState(false);

    const clickHandler = () => {
        setDetailsShown(!detailsShown);
    }
    console.log(props.item);
    return (
        <div className={`card card-custom mb-3 `}>
            <div className={`card-header d-flex ${classes['hover-card']}`} onClick={clickHandler}>
                <h3 className="card-title fw-bolder text-dark">{props.item.jobTitle}</h3>
                <div className={'d-none d-xl-flex align-items-center'}>
                    <button className={'btn btn-primary m-5'}
                            onClick={() => navigate(`/applications-review/${props.item.id}`)}> See applications
                    </button>
                    <button className={'btn btn-primary m-5'}
                            onClick={() => navigate(`/edit-job/${props.item.id}`)}>Edit job details
                    </button>
                    <DeleteJobModal update={props.update} jobId={props.item.id}/>
                </div>
                <div className={'d-flex d-xl-none align-items-center justify-content-between'}>
                    <DeleteJobModal update={props.update} jobId={props.item.id}/>
                    <MenuToggleButton id={props.item.id}/>
                </div>
            </div>
            <div className="card-body">
                <label className='form-label fw-bolder text-dark fs-6 mb-2'>Company name here</label><br/>
                <div className="fv-row">
                    <span className="me-2">
                        <KTSVG path="/media/icons/duotune/maps/map008.svg" className="svg-icon-2 svg-icon-primary"/>
                        <span className="mx-1">Location here
                        </span>
                    </span>
                    <span>
                        <KTSVG path="/media/icons/duotune/general/gen013.svg" className="svg-icon-2 svg-icon-primary"/>
                        <span className="mx-1">
                            {/*{props.item.appDeadline.toLocaleString(intl.formatMessage({id: 'DATE_FORMAT'}), {year: 'numeric', month: 'long', day: 'numeric'})}*/}
                            {(new Date(props.item.appDeadline)).toLocaleString(intl.formatMessage({id: 'DATE_FORMAT'}), {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                    </span>
                </div>
                {detailsShown && <JobListingsDetails jobListing={props.item}></JobListingsDetails>}
            </div>
        </div>
    );
}