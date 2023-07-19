import {FC} from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import App from "../App";
import {ApplyToJobListing} from "../pages/ApplyToJobListing";

const {PUBLIC_URL} = process.env

const AppRoutes: FC = () => {
    return (
        <BrowserRouter basename={PUBLIC_URL}>
            <Routes>
                <Route element={<App/>}>
                    <Route path='/apply/:jobId' element={<ApplyToJobListing/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export {AppRoutes}
