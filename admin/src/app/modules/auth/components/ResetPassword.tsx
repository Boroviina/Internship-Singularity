import React, {useEffect, useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {useFormik} from 'formik'
import AuthService from "../../../shared/services/api-client/auth.service";
import {Alert} from "../../../shared/components/Alert";
import {PasswordMeterComponent} from '../../../../_metronic/assets/ts/components'
import CustomModal from "../../../shared/components/CustomModal";
import {Button} from "../../../shared/components/form/Button";

const authService = new AuthService();

const initialValues = {
    password: 'password1',
    changepassword: 'password1',
}

const resetPasswordSchema = Yup.object().shape({
    password:Yup.string()
        .min(8, 'Minimum 8 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
    changepassword: Yup.string()
        .required('Password confirmation is required')
        .when('password', {
            is: (val: string) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
        }),
})

export function ResetPassword() {
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues,
        validationSchema: resetPasswordSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoading(true)
            setHasErrors(undefined)
            setTimeout(() => {
                authService.resetPassword(values.password, token)
                    .then(({data: {result}}) => {
                        setHasErrors(false)
                        setLoading(false)
                        openModal();
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

    useEffect(() => {
        PasswordMeterComponent.bootstrap()
    }, [])

    const hideModal = () => {
        setShowModal(false);
        navigate('/auth/login');
    }
    const openModal = () => {
        setShowModal(true);
    };

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

                {/* begin::Form group Password */}
                <div className='mb-7 fv-row' data-kt-password-meter='true'>
                    <div className='mb-1'>
                        <label className='form-label fw-bolder text-dark fs-6'>Password</label>
                        <div className='position-relative mb-3'>
                            <input
                                type='password'
                                placeholder='Password'
                                autoComplete='off'
                                {...formik.getFieldProps('password')}
                                className={clsx(
                                    'form-control form-control-lg form-control-solid',
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
                        {/* begin::Meter */}
                        <div
                            className='d-flex align-items-center mb-3'
                            data-kt-password-meter-control='highlight'
                        >
                            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
                            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
                            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
                            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px'></div>
                        </div>
                        {/* end::Meter */}
                    </div>
                    <div className='text-muted'>
                        Use 8 or more characters with a mix of letters, numbers & symbols.
                    </div>
                </div>
                {/* end::Form group */}

                {/* begin::Form group Confirm password */}
                <div className='fv-row mb-7'>
                    <label className='form-label fw-bolder text-dark fs-6'>Confirm Password</label>
                    <input
                        type='password'
                        placeholder='Password confirmation'
                        autoComplete='off'
                        {...formik.getFieldProps('changepassword')}
                        className={clsx(
                            'form-control form-control-lg form-control-solid',
                            {
                                'is-invalid': formik.touched.changepassword && formik.errors.changepassword,
                            },
                            {
                                'is-valid': formik.touched.changepassword && !formik.errors.changepassword,
                            }
                        )}
                    />
                    {formik.touched.changepassword && formik.errors.changepassword && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                                <span role='alert'>{formik.errors.changepassword}</span>
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
                        disabled={formik.isSubmitting || !formik.isValid}
                    >
                        {!loading && <span className='indicator-label'>Submit</span>}
                        {loading && (
                            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...{' '}
                                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
                        )}
                    </button>
                        <button
                            type='button'
                            id='kt_login_password_reset_form_cancel_button'
                            className='btn btn-lg btn-light-primary fw-bolder'
                            onClick={() => navigate('/auth/login')}
                        >
                            Cancel
                        </button>{' '}
                </div>
                {/* end::Form group */}
            </form>
            <CustomModal title="Success" show={showModal} onHide={hideModal} footer={
                <div className="d-flex flex-row">
                    <Button type="button" onClick={hideModal} state="primary">Continue</Button>
                </div>
            }>
                Password reset was successful! You can now log in!
            </CustomModal>
        </>
    )
}
