import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import * as Yup from "yup";
import {useFormik} from "formik";
import clsx from "clsx";
import InputField from "./InputField";
import {PasswordMeterComponent} from "../../../../_metronic/assets/ts/components";

const initialValues = {
    firstName: '',
    lastName: '',
    userEmail: '',
    password: '',
    confirmPassword: '',

    companyName: '',
    industry: '',
    numOfEmployees: '',
    city: '',
    address: '',
    companyEmail: '',
    phone: '',
    fax: ''
}

const registrationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('First name is required'),
    userEmail: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Max 50 symbols')
        .required('Email is required'),
    lastName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Last name is required'),
    password: Yup.string()
        .min(8, 'Minimum 8 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .required('Password confirmation is required')
        .when('password', {
            is: (val: string) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref('password')], "Password and Confirm Password don't match"),
        }),

    companyName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Max 50 symbols')
        .required('Company name is required'),
    industry: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Max 50 symbols')
        .required('Type of industry is required'),
    numOfEmployees: Yup.number()
        .min(1, 'Minimum one employee')
        .max(15000000, 'Too many employees')
        .typeError('Please insert a number'),
    city: Yup.string()
        .min(2, 'Minimum 2 symbols')
        .max(50, 'Max 50 symbols'),
    address: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Max 50 symbols'),
    companyEmail: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Max 50 symbols'),
    phone: Yup.string()
        .min(4, 'Minimum 4 symbols')
        .max(20, 'Max 20 symbols'),
    fax: Yup.string()
        .min(4, 'Minimum 4 symbols')
        .max(20, 'Max 20 symbols')
})

const EmployerRegistration = () => {
    const formik = useFormik({
        initialValues,
        validationSchema: registrationSchema,
        onSubmit: () => {
            //idi na login?
        }
    });

    useEffect(() => {
        PasswordMeterComponent.bootstrap()
    }, [])

    return (
        <form
            className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
            onSubmit={formik.handleSubmit}
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
                    <div className='col-md'>
                        <h2 className='text-center'>User information</h2>
                        <div className="row">
                            <div className='col-sm'>
                                <InputField name='First name' placeholder='First name' type='text'
                                            formikFieldProps={formik.getFieldProps('firstName')}
                                            formikTouched={formik.touched.firstName}
                                            formikErrors={formik.errors.firstName}
                                />
                            </div>
                            <div className='col-sm'>
                                <InputField name='Last name' placeholder='Last name' type='text'
                                            formikFieldProps={formik.getFieldProps('lastName')}
                                            formikTouched={formik.touched.lastName}
                                            formikErrors={formik.errors.lastName}
                                />
                            </div>
                        </div>

                        <InputField name='Email' placeholder='Email' type='email'
                                    formikFieldProps={formik.getFieldProps('userEmail')}
                                    formikTouched={formik.touched.userEmail}
                                    formikErrors={formik.errors.userEmail}
                        />

                        <div data-kt-password-meter='true'>
                            <InputField name='Password' placeholder='Password' type='password'
                                        formikFieldProps={formik.getFieldProps('password')}
                                        formikTouched={formik.touched.password}
                                        formikErrors={formik.errors.password}
                            />

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
                            {/*End Password meter*/}
                        </div>

                        <p className='text-muted'>
                            Use 8 or more characters with a mix of letters, numbers & symbols.
                        </p>

                        <InputField name='Confirm password' placeholder='Password confirmation' type='password'
                                    formikFieldProps={formik.getFieldProps('confirmPassword')}
                                    formikTouched={formik.touched.confirmPassword}
                                    formikErrors={formik.errors.confirmPassword}
                        />
                    </div>


                    <div className='col-md'>

                        <h2 className='text-center'>Company information</h2>
                        <InputField name='Company name' placeholder='Company name' type='text'
                                    formikFieldProps={formik.getFieldProps('companyName')}
                                    formikTouched={formik.touched.companyName}
                                    formikErrors={formik.errors.companyName}
                        />

                        <div className="row">
                            <div className='col-sm'>
                                <InputField name='Industry' placeholder='What do you do?' type='text'
                                            formikFieldProps={formik.getFieldProps('industry')}
                                            formikTouched={formik.touched.industry}
                                            formikErrors={formik.errors.industry}
                                />
                            </div>
                            <div className='col-sm'>
                                <InputField name='No. employees' placeholder='No. employees' type='text'
                                            formikFieldProps={formik.getFieldProps('numOfEmployees')}
                                            formikTouched={formik.touched.numOfEmployees}
                                            formikErrors={formik.errors.numOfEmployees}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className='col-sm'>
                                <InputField name='City' placeholder='City' type='text'
                                            formikFieldProps={formik.getFieldProps('city')}
                                            formikTouched={formik.touched.city}
                                            formikErrors={formik.errors.city}
                                />
                            </div>
                            <div className='col-sm'>
                                <InputField name='Address' placeholder='Address' type='text'
                                            formikFieldProps={formik.getFieldProps('address')}
                                            formikTouched={formik.touched.address}
                                            formikErrors={formik.errors.address}
                                />
                            </div>
                        </div>

                        <InputField name='Email' placeholder='Email' type='email'
                                    formikFieldProps={formik.getFieldProps('companyEmail')}
                                    formikTouched={formik.touched.companyEmail}
                                    formikErrors={formik.errors.companyEmail}
                        />
                        <div className="row">
                            <div className='col-sm'>
                                <InputField name='Phone' placeholder='Phone' type='text'
                                            formikFieldProps={formik.getFieldProps('phone')}
                                            formikTouched={formik.touched.phone}
                                            formikErrors={formik.errors.phone}
                                />
                            </div>
                            <div className='col-sm-6'>
                                <InputField name='Fax' placeholder='Fax' type='text'
                                            formikFieldProps={formik.getFieldProps('fax')}
                                            formikTouched={formik.touched.fax}
                                            formikErrors={formik.errors.fax}
                                />
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