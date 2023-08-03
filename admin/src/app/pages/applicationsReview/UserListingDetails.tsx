import React from "react";
import {KTSVG} from "../../../_metronic/helpers";

export function UserListingDetails() {
    return <div className={'container card-body'}>
        <div className={'fw-row d-flex justify-content-start align-items-center'}>
             <span className={'me-2 col-4'}>
                <KTSVG path={'/media/icons/duotune/general/gen014.svg'} className={'svg-icon-2x svg-icon-dark'}/>
                <span className={'mx-2'}>Birthday</span>
            </span>
            <span className={'me-2 col-4'}>
                <KTSVG path={'/media/icons/duotune/maps/map008.svg'} className={'svg-icon-2x svg-icon-dark'}/>
                <span className={'mx-2'}>Country</span>
            </span>
            <span className={'me-2 col-4'}>
                <KTSVG path={'/media/icons/duotune/general/gen049.svg'} className={'svg-icon-2x svg-icon-dark'}/>
                <span className={'mx-2'}>Gender</span>
            </span>

        </div>
        <hr/>
        <div className={'fw-row d-flex justify-content-start align-items-center'}>
        <span className={'me-2'}>
                <KTSVG path={'/media/icons/duotune/art/art008.svg'} className={'svg-icon-2x svg-icon-dark'}/>
                <span className={'mx-2'}>Languages</span>
            </span>
        </div>
        <hr/>
        <div className={'fw-row d-flex justify-content-start align-items-center'}>
        <span className={'me-2 col-3'}>
                <KTSVG path={'/media/icons/duotune/files/fil004.svg'} className={'svg-icon-2x svg-icon-dark'}/>
                <span className={'mx-2'}>CV</span>
            </span>
            <button className={'btn btn-light-dark m-1'}>
                <KTSVG path={`/media/icons/duotune/files/fil021.svg`}
                       className={'svg-icon svg-icon-2x  svg-icon-'}/>
                Download CV
            </button>
        </div><hr/>
        <div className={'fw-row d-flex justify-content-start align-items-center'}>
        <span className={'me-2 col-3'}>
                <KTSVG path={'/media/icons/duotune/files/fil003.svg'} className={'svg-icon-2x svg-icon-dark'}/>
                <span className={'mx-2'}>Cover Letter</span>
            </span>
            <button className={'btn btn-light-dark m-1'}>
                <KTSVG path={`/media/icons/duotune/files/fil021.svg`}
                       className={'svg-icon svg-icon-2x  svg-icon-'}/>
                Download Cover Letter
            </button>
        </div><hr/>
    </div>
}