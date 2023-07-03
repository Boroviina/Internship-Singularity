import React from 'react';
import {Link} from "react-router-dom";
import InputField from "./UI/InputField";

const EmployerRegistration = () => {
    return (
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

            <div className="container">
                <div className='row'>

                    <div className='col-md-6'>
                        <div className="row">
                            <h2 className='text-center'>User information</h2>
                            <div className='col-sm-6'>
                                <InputField name='First name' placeholder='First name' type='text'/>
                            </div>
                            <div className='col-sm-6'>
                                <InputField name='Last name' placeholder='Last name' type='text'/>
                            </div>
                        </div>
                        <InputField name='Email' placeholder='Email' type='email'/>
                        <InputField name='Password' placeholder='Password' type='password'/>
                        {/*Password meter*/}
                        <div
                            className='d-flex align-items-center my-3'
                            data-kt-password-meter-control='highlight'
                        >
                            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
                            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
                            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
                            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px'></div>
                        </div>
                        <p className='text-muted'>
                            Use 8 or more characters with a mix of letters, numbers & symbols.
                        </p>
                        <InputField name='Confirm password' placeholder='Password confirmation' type='password'/>
                    </div>


                    <div className='col-md-6'>

                        <h2 className='text-center'>Company information</h2>
                        <InputField name='Company name' placeholder='Company name' type='text'/>

                        <div className="row">
                            <div className='col-sm-6'>
                                <InputField name='Industry' placeholder='What do you do?' type='text'/>
                            </div>
                            <div className='col-sm-6'>
                                <InputField name='No. employees' placeholder='No. of employees' type='text'/>
                            </div>
                        </div>

                        <div className="row">
                            <div className='col-sm-6'>
                                <InputField name='City' placeholder='City' type='text'/>
                            </div>
                            <div className='col-sm-6'>
                                <InputField name='Address' placeholder='Address' type='text'/>
                            </div>
                        </div>

                        <InputField name='Email' placeholder='Email' type='email'/>

                        <div className="row">
                            <div className='col-sm-6'>
                                <InputField name='Phone' placeholder='Phone' type='text'/>
                            </div>
                            <div className='col-sm-6'>
                                <InputField name='Fax' placeholder='Fax' type='text'/>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-primary btn-block mt-4' type='submit'>Submit</button>
                </div>
            </div>
        </form>
    );
};

export default EmployerRegistration;