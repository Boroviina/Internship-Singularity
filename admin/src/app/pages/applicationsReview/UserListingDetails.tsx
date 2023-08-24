import React, {useEffect} from "react";
import {KTSVG} from "../../../_metronic/helpers";
import {DownloadButton} from "./DownloadButton";
import {format} from "date-fns";
export function UserListingDetails(props) {

    useEffect(()=>{
        const fetchCVDetails= async ()=>{

        }
    });

    return <div className={'container card-body'}>
        <div className={'fw-row d-flex justify-content-start align-items-center'}>
             <span className={'me-2 col-4'}>
                <KTSVG path={'/media/icons/duotune/general/gen014.svg'} className={'svg-icon-2x svg-icon-dark'}/>
                <span className={'mx-2'}>{props.item.user.birthDate ? format(new Date(props.item.user.birthDate), "yyyy-MM-dd"): ''}</span>
            </span>
            <span className={'me-2 col-4'}>
                <KTSVG path={'/media/icons/duotune/maps/map008.svg'} className={'svg-icon-2x svg-icon-dark'}/>
                <span className={'mx-2'}>{props.item.user.country}</span>
            </span>
            <span className={'me-2 col-4'}>
                <KTSVG path={'/media/icons/duotune/general/gen049.svg'} className={'svg-icon-2x svg-icon-dark'}/>
                <span className={'mx-2'}>{props.item.user.gender}</span>
            </span>

        </div>
        <hr/>
        <div className={'fw-row d-flex justify-content-start align-items-center'}>
        <span className={'me-2'}>
                <KTSVG path={'/media/icons/duotune/art/art008.svg'} className={'svg-icon-2x svg-icon-dark'}/>
                <span className={'mx-2'}>{props.item.user.language}</span>
            </span>
        </div>
        <hr/>
        <div className={'fw-row d-flex justify-content-start align-items-center'}>
            <DownloadButton icon={'/media/icons/duotune/files/fil021.svg'} name={'Download CV'} filename={props.cv}/>
        </div><hr/>
        <div className={'fw-row d-flex justify-content-start align-items-center'}>
       <DownloadButton icon={'/media/icons/duotune/files/fil021.svg'} name={'Download Cover Letter'} filename={props.coverLetter}/>
        </div><hr/>
    </div>
}