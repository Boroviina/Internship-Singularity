/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {Link, Outlet, Route, Routes} from 'react-router-dom'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import EmployerRegistration from "./components/EmployerRegistration";
import {About} from './Additional information pages/About'
import {Contact} from './Additional information pages/Contact'
import {Alert} from "../../shared/components/Alert";
import {ResetPassword} from "./components/ResetPassword";

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
      className='d-flex flex-column flex-column-fluid bgi-position-center position-x-center bgi-no-repeat bgi-size-cover bgi-attachment-fixed'
      style={{
        backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/loginBack.jpg')})`,
      }}
    >
      {/* begin::Content */}
      <div className='d-flex flex-center flex-column justify-content-center flex-column-fluid p-5 pb-lg-20 bg'>
        {/* begin::Logo */}
        <div className='mb-7 text-decoration-none text-gray-500 fw-bold fs-1'>
          <img alt='Logo' src={toAbsoluteUrl('/media/logos/logo-jr.png')} className='h-100px' />
          Job Radar
        </div>
        {/* end::Logo */}
        {/* begin::Wrapper */}
        {registered &&
            < Alert state='success' icon="icons/duotune/general/gen044.svg">
              You have registered successfully!
            </Alert>}
        <div className={`bg-body rounded shadow-sm p-10 p-lg-15 mx-auto fade-in-up`}>
          <Outlet context={[handleRegistered]}/>
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Content */}
      {/* begin::Footer */}
      <div className='d-flex flex-center flex-column-auto p-10'>
        <div className='d-flex align-items-center fw-bold fs-6'>
          <Link to='about' className='text-muted fs-2 text-hover-primary px-2'>
            About
        </Link>

          <Link to='contact' className='text-muted fs-2 text-hover-primary px-2'>
            Contact
          </Link>

          <a href="mailto:jobradar@gmail.com" className='text-muted fs-2 text-hover-primary px-2'>
            Contact Us
          </a>
        </div>
      </div>
      {/* end::Footer */}
    </div>
  )
}

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<EmployerRegistration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='reset-password' element={<ResetPassword/>} />
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
