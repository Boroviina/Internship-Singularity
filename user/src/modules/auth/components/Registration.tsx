import React, {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import {register} from '../core/_requests'
import {Link} from 'react-router-dom'
import {PasswordMeterComponent} from "../../../assests/ts/components";
import {useAuth} from '../core/Auth'
import {Input} from "../../../shared/components/form/Input";

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  changepassword: '',
  acceptTerms: false,
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
  changepassword: Yup.string().test(
      'password-match',
      'Password and Confirm Password didn\'t match',
      function (value) {
        return this.parent.password ? this.parent.password === value : true;
      }
  ).required('Password confirmation is required'),

  acceptTerms: Yup.bool().required('You must accept the terms and conditions'),
})

export function Registration() {
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await register(
          values.email,
          values.firstname,
          values.lastname,
          values.password,
          values.changepassword
        )
        // saveAuth(auth)
        // const {data: user} = await getUserByToken(auth.api_token)
        // setCurrentUser(user)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The registration details are incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_signup_form'
      onSubmit={formik.handleSubmit}
    >

      <div className='text-center mb-4'>
        <h1 className='text-dark mb-2 fs-3'>Create an Account</h1>
        <div className='text-secondary fw-bold fs-5'>
          Already have an account?{' '}
          <Link to='/auth/login' className='text-primary fw-bold'>
            Log in
          </Link>
        </div>
      </div>

      {formik.status && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      )}

      <Input
          formikFieldProps={formik.getFieldProps('firstname')}
          name='firstname'
          type='text'
          required={true}
          placeholder='First name'
          formikTouched={formik.touched.firstname}
          formikError={formik.errors.firstname}
          label='First name'
      />

      <Input
          formikFieldProps={formik.getFieldProps('lastname')}
          name='lastname'
          type='text'
          required={true}
          placeholder='Last name'
          formikTouched={formik.touched.lastname}
          formikError={formik.errors.lastname}
          label='Last name'
      />

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

      {/* begin::Form group Password */}
      <div className='fv-row mb-3' data-kt-password-meter='true'>
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

      {/* begin::Form group */}
      <div className='fv-row mb-3'>
        <div className='form-check form-check-custom form-check-solid'>
          <input
            className='form-check-input'
            type='checkbox'
            id='kt_login_toc_agree'
            {...formik.getFieldProps('acceptTerms')}
          />
          <label
            className='form-check-label fw-bold text-gray-700 fs-6'
            htmlFor='kt_login_toc_agree'
          >
            I Agree to the{' '}
            <Link to='/auth/terms' className='ms-1 link-primary'>
              terms and conditions
            </Link>
            .
          </label>
          {formik.touched.acceptTerms && formik.errors.acceptTerms && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.acceptTerms}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_up_submit'
          className='btn btn-lg btn-primary w-100 mb-3'
          disabled={formik.isSubmitting || !formik.isValid || !formik.values.acceptTerms}
        >
          {!loading && <span className='indicator-label'>Submit</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...{' '}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
        <Link to='/auth/login'>
          <button
            type='button'
            id='kt_login_signup_form_cancel_button'
            className='btn btn-lg btn-light-primary w-100'
          >
            Cancel
          </button>
        </Link>
      </div>
      {/* end::Form group */}
    </form>
  )
}
