import {Route, Routes, Navigate} from 'react-router-dom'
import {ApplyToJobListing} from "../pages/ApplyToJobListing";
import {Home} from "../pages/Home";

const PrivateRoutes = () => {
    return (
        <Routes>
            {/* Redirect to Home after success login/registration */}
            <Route path='auth/*' element={<Home/>}/>

            <Route path='/apply/:jobId' element={<ApplyToJobListing/>}/>
            <Route path='*' element={<Navigate to='/error/404'/>}/>
        </Routes>
    )
}

export {PrivateRoutes}