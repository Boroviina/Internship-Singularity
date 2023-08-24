import React from "react";
import background from './bgr.jpg'
import styles from '../ResponsiveControl.module.css'
import {useAuth} from "../../../modules/auth";
import {useNavigate} from "react-router-dom";
import SearchBar from "../../find-jobs/components/SearchBar";

export function SearchJob() {
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate();

    const searchJobs = (title, location) => {
        let navString = '/find-job';
        navigate(navWithSearchParams(navString, title, location));
    };

    // if logged in, go to FindJob page, otherwise, go to login
    const submitAction = currentUser ? searchJobs : () => {navigate('/auth/login')};

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

const navWithSearchParams = (page: string, title: string, location: string): string => {
    const queryParams = [];

    if (title) {queryParams.push(`title=${title}`);}
    if (location) {queryParams.push(`location=${location}`);}

    if(queryParams.length > 0) {
        return `${page}?${queryParams.join('&')}`;
    } else {
        return page;
    }
};