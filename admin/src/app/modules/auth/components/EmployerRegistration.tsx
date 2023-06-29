import React from 'react';
import {Link} from "react-router-dom";
import clsx from "clsx";

const EmployerRegistration = () => {
    return (
        <div className={`w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto fade-in-up`}>
            <form
                className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
                noValidate
                id='kt_login_signup_form'
            >
                <div className='mb-10 text-center'>
                    <h1 className='text-dark mb-3'>Create an Account</h1>

                    {/* begin::Link */}
                    <div className='text-gray-600 fw-bold fs-4'>
                        Already have an account?
                        <Link to='/auth/login' className='link-primary fw-bolder' style={{marginLeft: '5px'}}>
                            Log in
                        </Link>
                    </div>
                    {/* end::Link */}
                </div>
                {/* end::Heading */}

                <div className='row fv-row'>

                    <div className='col-xl-6 mb-7'>
                        <label className='form-label fw-bolder text-dark fs-6'>First name</label>
                        <input
                            placeholder='First name'
                            type='text'
                            autoComplete='off'
                            className='form-control form-control-lg form-control-solid'
                        />
                    </div>

                    <div className='col-xl-6 mb-7'>
                            <label className='form-label fw-bolder text-dark fs-6'>Last name</label>
                            <input
                                placeholder='Last name'
                                type='text'
                                autoComplete='off'
                                className='form-control form-control-lg form-control-solid'
                            />
                    </div>

                </div>

                <div className='fv-row mb-7'>
                    <label className='form-label fw-bolder text-dark fs-6'>Email</label>
                    <input
                        placeholder='Email'
                        type='email'
                        autoComplete='off'
                        className='form-control form-control-lg form-control-solid'
                    />
                </div>

            </form>
        </div>
    );
};

export default EmployerRegistration;