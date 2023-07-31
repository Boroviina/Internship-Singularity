import React, {useEffect, useState} from "react";
import classes from "./Profile.module.css"
import {Navigate, Outlet, Route, Routes, useNavigate} from "react-router-dom";
import {Button} from "../../shared/components/form/Button";
import {useAuth} from "../../modules/auth";
import {getUsersJobApplications} from "../../shared/services/job-application.service";
import {JobApplications} from "./JobApplications";
import {ProfileSettings} from "./ProfileSettings";
import {ProfileOverview} from "./ProfileOverview";
import {SavedJobListings} from "./SavedJobListings";

const ProfileLayout = () => {
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
                    <div onClick={() => navigate('/profile/overview')} className={`d-flex flex-wrap align-items-center justify-content-center ${classes['gap-2']} col-4 p-2 fs-6 ${classes['dark-blue-card']} border-end ${classes['border-bottom-left-radius']}`}>
                        <span className="d-none d-sm-inline-block">Overview</span>
                        <i className="bi bi-person-lines-fill d-inline-block d-sm-none" style={{color: '#fb246a'}}></i>
                    </div>
                    <div onClick={() => navigate('/profile/applications')} className={`d-flex flex-wrap align-items-center justify-content-center ${classes['gap-2']} col-4 p-2 fs-6 ${classes['dark-blue-card']} border-end`}>
                        <span className="d-none d-sm-inline-block">My applications</span>
                        <i className="bi bi-bag-heart d-inline-block d-sm-none" style={{color: '#fb246a'}}></i>
                        <span className="badge text-bg-secondary">{jobApplicationsNumber}</span>
                    </div>
                    <div onClick={() => navigate('/profile/saved-listings')} className={`d-flex flex-wrap align-items-center justify-content-center ${classes['gap-2']} col-4 p-2 fs-6 ${classes['dark-blue-card']} ${classes['border-bottom-right-radius']}`}>
                        <span className="d-none d-sm-inline-block">Saved job listings</span>
                        <i className="bi bi-bookmark-heart d-inline-block d-sm-none" style={{color: '#fb246a'}}></i>
                        <span className="badge text-bg-secondary">0</span>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

const Profile = () => (
    <Routes>
        <Route element={<ProfileLayout />}>
            <Route path='overview' element={<ProfileOverview />} />
            <Route path='settings' element={<ProfileSettings />} />
            <Route path='applications' element={<JobApplications />} />
            <Route path='saved-listings' element={<SavedJobListings />} />
            <Route path='*' element={<Navigate to='/error/404'/>}/>
            <Route index element={<ProfileOverview />} />
        </Route>
    </Routes>
)

export {Profile}

