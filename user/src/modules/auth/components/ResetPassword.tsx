import React, {useState} from 'react'
import * as Yup from 'yup'
import {Link, useNavigate, useSearchParams} from 'react-router-dom'
import {useFormik} from 'formik'
import AuthService from "../../../shared/services/api-client/auth.service";
import {Alert} from "../../../shared/components/Alert";
import {Input} from "../../../shared/components/form/Input";
import CustomInfoModal from "../../../shared/components/CustomInfoModal";

const authService = new AuthService();

const initialValues = {
    password: 'password1',
    changepassword: 'password1',
}

const resetPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
    changepassword: Yup.string().test(
        'password-match',
        'Password and Confirm Password didn\'t match',
        function (value) {
            return this.parent.password ? this.parent.password === value : true;
        }
    ).required('Password confirmation is required'),
})

export function ResetPassword() {
    const [loading, setLoading] = useState(false)
    const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
    const [showModal, setShowModal] = useState(false);
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
                <div className='text-center mb-4'>
                    <h1 className='text-label mb-2 fs-3'>Forgot Password ?</h1>
                    <div className='text-muted fw-bold fs-5'>Enter your new password.</div>
                </div>

                {hasErrors === true && (
                    <Alert state="danger">Sorry, looks like there are some errors detected, please try again.</Alert>)}

                {hasErrors === false && (
                    <Alert state="success">Password reset was successful. You can now login</Alert>)}

                <Input
                    formikFieldProps={formik.getFieldProps('password')}
                    name='password'
                    type='password'
                    required={true}
                    placeholder='Password'
                    formikTouched={formik.touched.password}
                    formikError={formik.errors.password}
                    label='Password'
                    additionalDescription="Use 8 or more characters with a mix of letters, numbers & symbols."
                />

                <Input
                    formikFieldProps={formik.getFieldProps('changepassword')}
                    name='changepassword'
                    type='password'
                    required={true}
                    placeholder='Password confirmation'
                    formikTouched={formik.touched.changepassword}
                    formikError={formik.errors.changepassword}
                    label='Confirm Password'
                />

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
                        >
                            Cancel
                        </button>
                    </Link>{' '}
                </div>
            </form>
            <CustomInfoModal title="Success" show={showModal} onHide={hideModal}>
                Password reset was successful! You can now log in!
            </CustomInfoModal>
        </>
    )
}
