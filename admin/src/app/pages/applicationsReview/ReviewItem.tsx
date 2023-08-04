import React, {useState} from "react";
import {KTSVG} from "../../../_metronic/helpers";
import {UserListingDetails} from "./UserListingDetails";

export function ReviewItem(props) {
    const [detailsShown, setDetailsShown] = useState(false);
    const clickHandler = () => {
        setDetailsShown(!detailsShown);
    }
    return <div className={'card card-custom cursor-pointer mb-3'} >
        <div className={'card-header d-flex justify-content-start align-items-center'} onClick={clickHandler}>
            <h3 className="card-title fw-bolder text-dark ">{props.item.user.name}</h3>
            <h3 className="card-title fw-bolder text-dark mx-5"> Proffesion</h3>
        </div>
        {detailsShown && <UserListingDetails/>}
        <div className={'card-body'}>
            <div className={'fw-row d-flex justify-content-start align-items-center'}>
                    <span className={'me-2 col-4'}>
                        <KTSVG path={'/media/icons/duotune/communication/com002.svg'}
                               className={'svg-icon-2x svg-icon-dark'}/>
                        <span className={'mx-2'}>{props.item.user.email}</span>
                    </span>

                <span className={'me-2 col-4'}>
                            <KTSVG path={'/media/icons/duotune/electronics/elc002.svg'}
                                   className={'svg-icon-2x svg-icon-dark'}/>
                            <span className={'mx-2'}>Phone number</span>
                        </span>
                <button className={'btn btn-light-dark col-4 w-25'}>
                    <a href={`mailto:${props.item.user.email}`}>Contact by E-mail</a>
                </button>
            </div>
        </div>
    </div>
}