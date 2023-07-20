import React, {useState} from 'react'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {useAuth} from '../core/Auth'
import AuthService from "../../../shared/services/api-client/auth.service";
import {Alert} from "../../../shared/components/Alert";
import {Input} from "../../../shared/components/form/Input";
const authService = new AuthService();

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
    password: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
})

const initialValues = {
    email: 'romana1@example.com',
    password: 'password1',
}

export function Login() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const {saveAuth, setCurrentUser} = useAuth()

    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoading(true)
            setError(null);
            try {
                const {tokens: auth, user} = await authService.login(values.email, values.password)
                saveAuth(auth)
                setCurrentUser(user)
            } catch (error) {
                setError("The login detail is incorrect");
                saveAuth(undefined)
                setStatus('The login detail is incorrect')
                setSubmitting(false)
            }
            setLoading(false)
        },
    })

    return (
        <form
            className={`form w-100`}
            onSubmit={formik.handleSubmit}
            noValidate
            id='kt_login_signin_form'
        >
            <div className='text-center mb-4'>
                <h1 className='text-dark mb-2 fs-3'>Sign In to Job Radar</h1>
                <div className='text-secondary fw-bold fs-5'>
                    New Here?{' '}
                    <Link to='/auth/registration' className='text-primary fw-bold'>
                        Create an Account
                    </Link>
                </div>
            </div>

            {!loading && error && <Alert state="danger">{error}</Alert>}

            {/* begin::Form group */}

            <Input
                formikFieldProps={formik.getFieldProps('email')}
                name='email'
                type='email'
                required={true}
                placeholder='Email'
                formikTouched={formik.touched.email}
                formikError={formik.errors.email}
                label='Email'
            />

            <Input
                formikFieldProps={formik.getFieldProps('password')}
                name='password'
                type='password'
                required={true}
                placeholder='Password'
                formikTouched={formik.touched.password}
                formikError={formik.errors.password}
                label='Password'
            />

            <div className='d-flex justify-content-start mb-3' style={{marginTop: '-5%'}}>
                <Link
                    to='/auth/forgot-password'
                    className='text-primary fs-6 fw-bold'

                > Forgot Password ?
                </Link>
            </div>


            {/* begin::Action */}
            <div className='text-center'>
                <button
                    type='submit'
                    id='kt_sign_in_submit'
                    className='btn btn-lg btn-primary w-100 mb-2'
                    disabled={formik.isSubmitting || !formik.isValid}
                >
                    {!loading && <span className='indicator-label'>Continue</span>}
                    {loading && (
                        <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
                    )}
                </button>
            </div>
            {/* end::Action */}
        </form>
    )
}
