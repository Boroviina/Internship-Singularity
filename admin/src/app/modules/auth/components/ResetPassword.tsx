import React, {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link, useSearchParams} from 'react-router-dom'
import {useFormik} from 'formik'
import AuthService from "../../../shared/services/api-client/auth.service";
import {Alert} from "../../../shared/components/Alert";

const authService = new AuthService();

const initialValues = {
    password: 'password1',
}

const resetPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
})

export function ResetPassword() {
    const [loading, setLoading] = useState(false)
    const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')

    const formik = useFormik({
        initialValues,
        validationSchema: resetPasswordSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoading(true)
            setHasErrors(undefined)
            setTimeout(() => {
                authService.resetPassword(values.password, token)
                    .then(({data: {result}}) => {
                        console.log("Success")
                        setHasErrors(false)
                        setLoading(false)
                    })
                    .catch(() => {
                        setHasErrors(true)
                        setLoading(false)
                        setSubmitting(false)
                        setStatus('The password detail is incorrect')
                    })
            }, 1000)
        },
    })

    return (
        <>
            <form
                className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
                noValidate
                id='kt_login_password_reset_form'
                onSubmit={formik.handleSubmit}
            >
                <div className='text-center mb-10'>
                    {/* begin::Title */}
                    <h1 className='text-dark mb-3'>Forgot Password ?</h1>
                    {/* end::Title */}

                    {/* begin::Link */}
                    <div className='text-gray-600 fw-bold fs-4'>Enter your new password.</div>
                    {/* end::Link */}
                </div>

                {hasErrors === true && (
                    <Alert state="danger" icon="icons/duotune/general/gen040.svg">Sorry, looks like there are some errors detected, please try again.</Alert>)}

                {hasErrors === false && (
                    <Alert state="success" icon="icons/duotune/general/gen043.svg">Password reset was successful. You can now login</Alert>)}

                {/* begin::Form group */}
                <div className='fv-row mb-10'>
                    <div className='d-flex justify-content-between mt-n5'>
                        <div className='d-flex flex-stack mb-2'>
                            {/* begin::Label */}
                            <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
                            {/* end::Label */}
                            {/* begin::Link */}
                            <Link
                                to='/auth/forgot-password'
                                className='link-primary fs-6 fw-bolder'
                                style={{marginLeft: '5px'}}
                            >
                                Forgot Password ?
                            </Link>
                            {/* end::Link */}
                        </div>
                    </div>
                    <input
                        type='password'
                        autoComplete='off'
                        {...formik.getFieldProps('password')}
                        className={clsx(
                            `form-control form-control-lg form-control-solid`,
                            {
                                'is-invalid': formik.touched.password && formik.errors.password,
                            },
                            {
                                'is-valid': formik.touched.password && !formik.errors.password,
                            }
                        )}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                                <span role='alert'>{formik.errors.password}</span>
                            </div>
                        </div>
                    )}
                </div>
                {/* end::Form group */}

                {/* begin::Form group */}
                <div className='d-flex flex-wrap justify-content-center pb-lg-0'>
                    <button
                        type='submit'
                        id='kt_password_reset_submit'
                        className='btn btn-lg btn-primary fw-bolder me-4'
                    >
                        <span className='indicator-label'>Submit</span>
                        {loading && (
                            <span className='indicator-progress'>
                Please wait...
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
                        )}
                    </button>
                    <Link to='/auth/login'>
                        <button
                            type='button'
                            id='kt_login_password_reset_form_cancel_button'
                            className='btn btn-lg btn-light-primary fw-bolder'
                            disabled={formik.isSubmitting || !formik.isValid}
                        >
                            Cancel
                        </button>
                    </Link>{' '}
                </div>
                {/* end::Form group */}
            </form>
        </>
    )
}
