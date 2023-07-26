import React, {useEffect, useState} from "react";
import classes from "./Profile.module.css"
import {useNavigate} from "react-router-dom";
import {Header} from "../Header/Header";
import {Footer} from "../generalFooter/Footer";
import {Button} from "../../shared/components/form/Button";
import {useAuth} from "../../modules/auth";
import {getUsersJobApplications} from "../../shared/services/job-application.service";

export const Profile = () => {
    const [loading, setLoading] = useState(false);
    const [jobApplicationsNumber, setJobApplicationNumber] = useState(0);
    const navigate = useNavigate();
    const {currentUser} = useAuth();

    useEffect(() => {
        const fetchJobApplications = async () => {
            setLoading(true);
            try {
                const jobApplications = await getUsersJobApplications(`${currentUser.id}`);
                setJobApplicationNumber(jobApplications.length);
            } catch(error) {
                navigate('/error/500');
            }
            setLoading(false);
        }
        fetchJobApplications();
    }, [currentUser.id]);

    return (
        <>
            <Header/>
            <div className={`mx-auto shadow overflow-hidden ${classes['main-card']} pt-1 mb-1`}>
                <div className="d-flex flex-wrap align-items-center align-content-between p-4">
                    <div className="d-flex flex-wrap items-center">
                        <div className={`${classes['text-dark-blue']}`}>
                            <p className="fs-5 mb-0">It is good to see you in Job Radar world...</p>
                            <p className="fw-bold fs-5 mb-0">{currentUser.name}</p>
                            <p className="">{currentUser.email}</p>
                        </div>
                    </div>
                    <div className="ms-auto">
                        <Button type="button" onClick={() => navigate('/profile/settings')}>Settings</Button>
                    </div>
                </div>
                <div className="row border-top">
                    <div className={`d-flex flex-wrap align-items-center justify-content-center ${classes['gap-2']} col-6 p-2 fs-6 ${classes['dark-blue-card']} border-end ${classes['border-bottom-left-radius']}`}>
                        <span className="d-none d-sm-inline-block">Saved job listings</span>
                        <i className="bi bi-bookmark-heart d-inline-block d-sm-none" style={{color: '#fb246a'}}></i>
                        <span className="badge text-bg-secondary">0</span>
                    </div>
                    <div onClick={() => navigate('/profile/applications')} className={`d-flex flex-wrap align-items-center justify-content-center ${classes['gap-2']} col-6 p-2 fs-6 ${classes['dark-blue-card']} ${classes['border-bottom-right-radius']}`}>
                        <span className="d-none d-sm-inline-block">My applications</span>
                        <i className="bi bi-bag-heart d-inline-block d-sm-none" style={{color: '#fb246a'}}></i>
                        <span className="badge text-bg-secondary">{jobApplicationsNumber}</span>
                    </div>
                </div>
            </div>
            <div className={`row row-cols-md-2 mx-auto shadow overflow-hidden ${classes['secondary-card']} my-5`}>
                <div className={`d-flex flex-wrap items-center p-3 fs-6 ${classes['light-gray-card']} border-end border-bottom`}>
                    <div>
                        <i className="bi bi-bookmark-heart" style={{fontSize: '1.3rem', color: '#fb246a'}}></i>
                        <p className="mb-0 mt-1 fw-bold fs-5">Saved job listings</p>
                        <p className="mb-0">Save job listings that you find interesting, apply later</p>
                    </div>
                </div>
                <div onClick={() => navigate('/profile/applications')} className={`d-flex flex-wrap items-center col p-3 fs-6 ${classes['light-gray-card']} border-end border-bottom`}>
                    <div>
                        <i className="bi bi-bag-heart" style={{fontSize: '1.3rem', color: '#fb246a'}}></i>
                        <p className="mb-0 mt-1 fw-bold fs-5">My applications</p>
                        <p className="mb-0">All job applications, active and expired</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}