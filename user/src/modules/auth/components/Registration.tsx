import React, {useState} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {Link, useNavigate} from 'react-router-dom'
import {Input} from "../../../shared/components/form/Input";
import AuthService from "../../../shared/services/api-client/auth.service";
import {Alert} from "../../../shared/components/Alert";
import CustomModal from "../../../shared/components/CustomModal";
const authService = new AuthService();

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
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true);
      setError(null);
      try {
        await authService.register(
            {
              name: `${values.firstname} ${values.lastname}`,
              email: values.email,
              password: values.password
            }
        )
        openModal()
      } catch (error) {
        setError("Invalid registration detail")
        setStatus('The registration failed')
        setSubmitting(false)
      }
      setLoading(false)
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
            id='kt_login_signup_form'
            onSubmit={formik.handleSubmit}
        >

          <div className='text-center mb-4'>
            <h1 className='text-label mb-2 fs-3'>Create an Account</h1>
            <div className='text-secondary fw-bold fs-5'>
              Already have an account?{' '}
              <Link to='/auth/login' className='text-primary fw-bold'>
                Log in
              </Link>
            </div>
          </div>

          {!loading && error && <Alert state="danger">{error}</Alert>}

          <div className="row">
            <div className="col-md-6">
              <Input
                formikFieldProps={formik.getFieldProps('firstname')}
                name='firstname'
                type='text'
                required={true}
                placeholder='First name'
                formikTouched={formik.touched.firstname}
                formikError={formik.errors.firstname}
                label='First name'/>
            </div>
            <div className="col-md-6">
              <Input
                formikFieldProps={formik.getFieldProps('lastname')}
                name='lastname'
                type='text'
                required={true}
                placeholder='Last name'
                formikTouched={formik.touched.lastname}
                formikError={formik.errors.lastname}
                label='Last name'/>
            </div>
          </div>

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
                  className='form-check-label fw-bold text-label mx-3 fs-6'
                  htmlFor='kt_login_toc_agree'
                  style={{color: '#010b1d'}}
              >
                {' '} I Agree to the{' '}
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
          </div>
          {/* end::Form group */}
        </form>

        <CustomModal title="Success" show={showModal} onHide={hideModal} backdrop="static" keyboard={false}>
          Your registration was successful! You can now log in!
        </CustomModal>
      </>
  )
}
