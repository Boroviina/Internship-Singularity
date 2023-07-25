import React from "react";
import classes from "./Profile.module.css"
import {useNavigate} from "react-router-dom";
import {Header} from "../Header/Header";
import {Footer} from "../generalFooter/Footer";
import {Button} from "../../shared/components/form/Button";
import {useAuth} from "../../modules/auth";

export const Profile = () => {
    const navigate = useNavigate();
    const {currentUser} = useAuth();

    return (
        <>
            <Header/>
            <div className={`mx-auto shadow overflow-hidden ${classes['main-card']} pt-4 mb-1`}>
                <div className="d-flex flex-wrap gap-4 align-items-center align-content-between p-4">
                    <div className="d-flex flex-wrap items-center gap-6">
                        <div className="text-secondary opacity-75">
                            <p className="fs-5 mb-0">It is good to see you in Job Radar world...</p>
                            <p className="fw-bold fs-5 mb-0">{currentUser.name}</p>
                            <p className="mb-0">{currentUser.email}</p>
                        </div>
                    </div>
                    <div className="ms-auto">
                        <Button type="button" onClick={() => navigate('/profile/settings')}>Settings</Button>
                    </div>
                </div>
                <div className="row grid-cols-3 md:divide-x md:divide-gray-200 dark:md:divide-gray-800 md:divide-solid border-t md:border-gray-200 dark:md:border-gray-800 m-0 border-top">
                    <div
                       className={`d-flex flex-wrap align-items-center justify-content-center ${classes['gap-2']} col-6 p-2 fs-6 ${classes['light-gray-card']} border-end ${classes['border-bottom-left-radius']}`}>
                        <span className="text-sm d-none d-sm-inline-block">Saved job listings</span>
                        <i className={`bi bi-bookmark-heart d-inline-block d-sm-none ${classes['icon-pink']}`}></i>
                        <span className="badge text-bg-secondary">0</span>
                    </div>
                    <div
                       className={`d-flex flex-wrap align-items-center justify-content-center ${classes['gap-2']} col-6 p-2 fs-6 ${classes['light-gray-card']} ${classes['border-bottom-right-radius']}`}>
                        <span className="text-sm d-none d-sm-inline-block">My applications</span>
                        <i className={`bi bi-bag-heart d-inline-block d-sm-none ${classes['icon-pink']}`}></i>
                        <span className="badge text-bg-secondary">0</span>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}