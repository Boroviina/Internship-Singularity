import React, {useState} from 'react'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {Alert} from "../../../shared/components/Alert";
import AuthService from "../../../shared/services/api-client/auth.service";
import {Input} from "../../../shared/components/form/Input";

const authService = new AuthService();

const initialValues = {
  email: 'user@demo.com',
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
      .email('Wrong email format')
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Email is required'),
})

export function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setHasErrors(undefined)
      setTimeout(() => {
        authService.forgotPassword(values.email)
            .then(({data: {result}}) => {
              setHasErrors(false)
              setLoading(false)
            })
            .catch(() => {
              setHasErrors(true)
              setLoading(false)
              setSubmitting(false)
              setStatus('The login detail is incorrect')
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
            <div className='text-center mb-4'>
                <h1 className='text-label mb-2 fs-3'>Forgot Password ?</h1>
                <div className='text-muted fw-bold fs-5'>Enter your email to reset your password.</div>
          </div>

          {hasErrors === true && (
              <Alert state="danger">Sorry, looks like there are some errors detected, please try again.</Alert>)}
          {hasErrors === false && (
              <Alert state="success">Sent password reset. Please check your email</Alert>)}

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
      </>
  )
}
