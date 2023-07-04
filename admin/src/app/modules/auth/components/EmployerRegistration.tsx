import React from 'react';
import {Link} from "react-router-dom";
import InputField from "./UI/InputField";
import * as Yup from "yup";

const initialValues = {
    firstname: '',
    lastname: '',
    useremail: '',
    password: '',
    changepassword: '',
    companyname: '',
    industry: '',
    numofemployees: '',
    city: '',
    address: '',
    companyemail: '',
    phone: '',
    fax: ''
}

const registrationSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('First name is required'),
    email: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
    lastname: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Last name is required'),
    password: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
    changepassword: Yup.string()
        .required('Password confirmation is required')
        .when('password', {
            is: (val: string) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
        }),
    companyname: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Max 50 symbols')
        .required('Company name is required'),
    industry: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Max 50 symbols')
        .required('Type of industry is required'),
    numofemployees: Yup.number()
        .min(1, 'Minimum one employee')
        .max(15000000,'Too many employees'),
    city: Yup.string()
        .min(2, 'Minimum 2 symbols')
        .max(50,'Max 50 symbols'),
    address: Yup.string()
        .min(3, 'Minimum 2 symbols')
        .max(50,'Max 50 symbols'),
    companyemail: Yup.string()
        .min(3, 'Minimum 2 symbols')
        .max(50,'Max 50 symbols')
        .email('Wrong email format'),
    phone: Yup.string()
        .min(4, 'Minimum 4 symbols')
        .max(20, 'Max 20 symbols'),
    fax: Yup.string()
        .min(4, 'Minimum 4 symbols')
        .max(20, 'Max 20 symbols')
})

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