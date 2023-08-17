import {FC} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {PrivateRoutes} from './PrivateRoutes'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {Logout, AuthPage, useAuth} from '../modules/auth'
import {App} from '../App'
import {Home} from "../pages/Home/Home";
import {MasterLayout} from "../layout/MasterLayout";
import {VerifyEmail} from "../modules/email-verification/VerifyEmail";

const {PUBLIC_URL} = process.env

const AppRoutes: FC = () => {
    const {currentUser} = useAuth()
    return (
        <BrowserRouter basename={PUBLIC_URL}>
            <Routes>
                <Route element={<App/>}>
                    <Route path='error/*' element={<ErrorsPage/>}/>
                    <Route path='logout' element={<Logout/>}/>
                    {currentUser ? (
                        <>
                            <Route element={<MasterLayout/>}>
                                <Route path='/*' element={<PrivateRoutes/>}/>
                                <Route index element={<Home/>}/>
                            </Route>
                            <Route path="verify-email" element={<VerifyEmail/>}/>
                        </>
                    ) : (
                        <>
                            <Route element={<MasterLayout/>}>
                                <Route path='home' element={<Home/>}/>
                                <Route path='*' element={<Navigate to='/home'/>}/>
                            </Route>
                            <Route path='auth/*' element={<AuthPage/>}/>
                        </>
                    )}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export {AppRoutes}

