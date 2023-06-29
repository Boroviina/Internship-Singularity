import React from 'react';
import {Link} from "react-router-dom";

const EmployerRegistration = () => {
    return (
        <div className={`w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto fade-in-up`}>
            <form
                className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
                noValidate
                id='kt_login_signup_form'
                // onSubmit={}
            >
                <div className='mb-10 text-center'>
                    {/* begin::Title */}
                    <h1 className='text-dark mb-3'>Create an Account</h1>
                    {/* end::Title */}

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

                

            </form>
        </div>
    );
};

export default EmployerRegistration;