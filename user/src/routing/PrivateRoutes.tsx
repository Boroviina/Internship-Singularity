import {Route, Routes, Navigate} from 'react-router-dom'
import {ApplyToJobListing} from "../pages/ApplyToJobListing";
import {Home} from "../pages/Home/Home";
import JobListingPage from "../pages/find-jobs/JobListingPage";
import {Profile} from "../pages/profiles/Profile";

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path='auth/*' element={<Home/>}/>

            <Route path="/find-job/:title?/:location?" element={<JobListingPage/>}/>
            <Route path='/apply/:jobId' element={<ApplyToJobListing/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path="/profile/*" element={<Profile/>}/>
            <Route path='*' element={<Navigate to='/error/404'/>}/>
        </Routes>
    )
}

export {PrivateRoutes}