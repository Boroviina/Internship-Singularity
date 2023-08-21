import React from "react";
import background from './bgr.jpg'
import styles from '../ResponsiveControl.module.css'
import {useAuth} from "../../../modules/auth";
import {useNavigate} from "react-router-dom";
import SearchBar from "../../find-jobs/components/SearchBar";

export function SearchJob() {
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate();
    const FindJobClickHandle = (title, location) => {
        let navString = '/find-job';
        if(title) {navString += '/' + title;}
        if(location) {navString += '/' + location;}
        navigate(navString);
    };

    const submitAction = currentUser ? FindJobClickHandle : () => {navigate('/auth/login')};

    return <div className={'card position-relative  '}>
        <div className={`bgi-no-repeat bgi-position-center d-flex justify-content-end ${styles.jobSearchHeigh}`}
             style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <div className={'container d-flex flex-column justify-content-end mt-5'}>
                <div className={'row d-flex justify-content-end'}>
                    <h1 className={'display-1 fw-bold'}>Find the <br/> most exciting <br/> startup jobs</h1>
                </div>
                <div className={'col'}>
                    <div className={'row'}>
                        <div className={'col-xl-8'}>
                                <SearchBar onSearch={submitAction}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}