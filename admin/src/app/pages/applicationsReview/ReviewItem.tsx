import React, {useState} from "react";
import {KTSVG} from "../../../_metronic/helpers";
import {UserListingDetails} from "./UserListingDetails";
import {getFileDetails} from "../../shared/services/file.service";
import {useNavigate, useParams} from "react-router-dom";


export function ReviewItem(props) {
    const [detailsShown, setDetailsShown] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [cv, setCv] = useState(null);
    const [coverLetter, setCoverLetter] = useState(null);
    const [modalOpen, setModalOpen]=useState(false);
    const fetchCVDetails = async () => {
        try {
            const cv = await getFileDetails(props.item.cv);
            setCv(cv);
            console.log('CV ID: ', props.item.cv);
            console.log('CV : ', cv);
        } catch (error) {
            setError("Error while trying to get cv");
            navigate('/error');
        }
    }
    const fetchCoverLetterDetails = async () => {
        try {
            const coverLetter = await getFileDetails(props.item.coverLetter);
            setCoverLetter(coverLetter);
            console.log('Cover Letter ID: ', props.item.coverLetter);
            console.log('Cover Letter : ', coverLetter);
        } catch (error) {
            setError("Error while trying to get cover letter");
            navigate('/error');
        }
    }
    const clickHandler = () => {
        setDetailsShown(!detailsShown);
        fetchCVDetails();
        fetchCoverLetterDetails();
    }
    const openModalHandler=()=>{
        if(modalOpen)
            setModalOpen(false);
        else
            setModalOpen(true);
    }

    return <div className={'card card-custom mb-3'}>
        <div className={'d-flex justify-content-between card-header '}>
            <div className={' cursor-pointer  d-flex justify-content-start align-items-center'}
                 onClick={clickHandler}>

                <h3 className="card-title fw-bolder text-dark ">{props.item.user.name}</h3>
                <h3 className="card-title fw-bolder text-dark mx-5"> {props.item.user.occupation}</h3>
            </div>
                <button className={'btn btn-light-dark   m-5'} onClick={openModalHandler}>
                    Change Phase
                </button>

        </div>
        {detailsShown && <UserListingDetails item={props.item} cv={cv} coverLetter={coverLetter}/>}
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
                            <span className={'mx-2'}>{props.item.phoneNumber}</span>
                        </span>
                <button className={'btn btn-light-dark col-4 w-25'}>
                    <a href={`mailto:${props.item.user.email}`}>Contact by E-mail</a>
                </button>
            </div>
        </div>
    </div>
}