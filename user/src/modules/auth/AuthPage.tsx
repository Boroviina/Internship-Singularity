import React from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import {Registration} from "./components/Registration";
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {toAbsoluteUrl} from "../../helpers";
import classes from "./AuthPage.module.css";
import {ResetPassword} from "./components/ResetPassword";

const AuthLayout = () => {

  return (
    <div
      className={`container-fluid position-x-center ${classes["page-background"]}`}
      style={{
        backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/loginBack.jpg')})`,
      }}
    >
      <div className='d-flex flex-center flex-column justify-content-center flex-column-fluid h-100'>
          <div className="d-flex p-3 text-decoration-none fw-bold fs-3 text-secondary align-items-center justify-content-center">
              <img
                  alt='logo'
                  src={toAbsoluteUrl('/media/logos/logo-jr.png')}
                  className={classes.logo}
              /> Job Radar
          </div>
        <div className={`bg-body rounded shadow-sm p-5 mx-auto`}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='registration' element={<Registration />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='reset-password' element={<ResetPassword/>} />
        <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
