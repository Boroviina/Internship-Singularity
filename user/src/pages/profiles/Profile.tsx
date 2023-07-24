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
            <div className={`mx-auto shadow overflow-hidden ${classes['main-card']} p-4 mb-1`}>
                <div className="d-flex flex-wrap gap-4 align-items-center align-content-between p-2">
                    <div className="d-flex flex-wrap items-center gap-6">
                        <div className="">
                            <p className="text-secondary opacity-75 fs-5 mb-0">It is good to see you in Job Radar world...</p>
                            <p className="text-secondary opacity-75 fw-bold fs-5 mb-0">{currentUser.name}</p>
                            <p className="text-secondary opacity-75 mb-0">{currentUser.email}</p>
                        </div>
                    </div>
                    <div className="ms-auto">
                        <Button type="button" onClick={() => navigate('/profile/settings')}>Settings</Button>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}