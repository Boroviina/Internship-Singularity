import {Route, Routes, Navigate} from 'react-router-dom'
import {ApplyToJobListing} from "../pages/ApplyToJobListing";
import {Home} from "../pages/Home/Home";
import JobListingPage from "../pages/find-jobs/JobListingPage";
import {Profile} from "../pages/profiles/Profile";
import {ProfileSettings} from "../pages/profiles/ProfileSettings";
import {JobApplications} from "../pages/profiles/JobApplications";

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path='auth/*' element={<Home/>}/>

            <Route path="/profile" element={<Profile/>}/>
            <Route path="/profile/settings" element={<ProfileSettings/>}/>
            <Route path="/profile/applications" element={<JobApplications/>}/>
            <Route path="find-job" element={<JobListingPage/>}/>
            <Route path='/apply/:jobId' element={<ApplyToJobListing/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='*' element={<Navigate to='/error/404'/>}/>
        </Routes>
    )
}

export {PrivateRoutes}