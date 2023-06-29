import React from 'react';
import {Link} from "react-router-dom";
import clsx from "clsx";
import InputField from "./UI/InputField";

const EmployerRegistration = () => {
    return (
        <div className='w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto fade-in-up'>
            <form
                className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
                noValidate
                id='kt_login_signup_form'
            >
                <div className='mb-10 text-center'>
                    <h1 className='text-dark mb-3'>Create an Account</h1>


                    <div className='text-gray-600 fw-bold fs-4'>
                        Already have an account?
                        <Link to='/auth/login' className='link-primary fw-bolder' style={{marginLeft: '5px'}}>
                            Log in
                        </Link>
                    </div>

                </div>

                <div className='row fv-row'>

                    <div className='col-xl-6 mb-7'>
                        <InputField name='First name' placeholder='First name' type='text'/>
                    </div>
                    <div className='col-xl-6 mb-7'>
                        <InputField name='Last name' placeholder='Last name' type='text'/>
                    </div>
                </div>

                <div className='fv-row mb-7'>
                    <InputField name='Email' placeholder='Email' type='email'/>
                </div>

            </form>
        </div>
    );
};

export default EmployerRegistration;