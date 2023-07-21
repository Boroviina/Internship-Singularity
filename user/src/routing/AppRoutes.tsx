import {FC} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {PrivateRoutes} from './PrivateRoutes'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {Logout, AuthPage, useAuth} from '../modules/auth'
import {App} from '../App'
import {Home} from "../pages/Home/Home";

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
                            <Route path='/*' element={<PrivateRoutes/>}/>
                            <Route index element={<Home/>}/>
                        </>
                    ) : (
                        <>
                            <Route path='home' element={<Home/>}/>
                            <Route path='auth/*' element={<AuthPage/>}/>
                            <Route path='*' element={<Navigate to='/home'/>}/>
                        </>
                    )}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export {AppRoutes}

