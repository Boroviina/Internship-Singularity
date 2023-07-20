import React, {useEffect, useState} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import {Registration} from "./components/Registration";
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {toAbsoluteUrl} from "../../helpers";
import {Alert} from "../../shared/components/Alert";
import classes from "./AuthPage.module.css";

const AuthLayout = () => {
    const [registered, setRegistered] = useState(false);
    const handleRegistered = () => {
        setRegistered(true);
        const timer = setTimeout(() => {
            setRegistered(false);
        }, 5000);
        return () => {
            clearTimeout(timer)
        };
    };

    useEffect(() => {
        document.body.classList.add('bg-body')
        return () => {
            document.body.classList.remove('bg-body')
        }
    }, []);


  return (
    <div
      className={`container-fluid position-x-center ${classes["page-background"]}`}
      style={{
        backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/loginBack.jpg')})`,
      }}
    >
      <div className='d-flex flex-center flex-column justify-content-center flex-column-fluid p-2 pb-lg-20 bg'>
          <div className="d-flex p-5 text-decoration-none fw-bold fs-3 text-secondary align-items-center justify-content-center">
              <img
                  alt='logo'
                  src={toAbsoluteUrl('/media/logos/logo-jr.png')}
                  className={classes.logo}
              /> Job Radar
          </div>
        {registered &&
            < Alert state='success'>
              You have registered successfully!
            </Alert>}
        <div className={`bg-body rounded shadow-sm p-5 mx-auto`}>
          <Outlet context={[handleRegistered]}/>
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
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
