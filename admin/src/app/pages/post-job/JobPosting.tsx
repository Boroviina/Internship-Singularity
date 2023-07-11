import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {createJob} from "../../shared/services/job.service";
import clsx from "clsx";
import {JobInputField} from "./JobInputField";
import {JobTextareaField} from "./JobInputField";

export function JobPosting() {
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues: {
            jobTitle: '',
            description: '',
            education: '',
            skills: '',
            languages: '',
            driverLicense: false,
            appDeadline: '',
            appInstructions: '',
            numPosition: '',
            cv: false,
            coverLetter: false,
        },
        validationSchema: Yup.object({

            jobTitle: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            description: Yup.string()
                .max(200, 'Must be 200 characters or less')
                .required('Required'),
            education: Yup.string()
                .max(50, 'Must be 50 characters or less'),
            skills: Yup.string()
                .max(100, 'Must be 100 characters or less'),
            languages: Yup.string()
                .max(50, 'Must be 50 characters or less'),
            appDeadline: Yup.date()
                .nullable()
                .required("Please input Expiry Date")
                .min(new Date(Date.now()), 'Must be at least tomorrow'),
            appInstructions: Yup.string()
                .max(200, 'Must be 200 characters or less')
                .required('Required'),
            numPosition: Yup.number()
                .min(1, 'Must be at least 1 position')
                .max(10, 'Can be maximum 10 open positions per job advertisement')
                .required('Required')
                .integer('It must be whole number')
                .positive('It must be positive number')
        }),
        onSubmit: async (values, {resetForm, setStatus, setSubmitting}) => {
            setLoading(true)
            try {
                setSubmitting(false);
                await createJob(values);
            } catch (error) {
                setStatus('Check if all inputs are filled');
                setSubmitting(false);
                setLoading(false);
            }
            resetForm();
        },
    });

    return <div className={`w-lg-1024px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto fade-in-up`}>
        <form action=""
              noValidate
              className={`form`}
              onSubmit={formik.handleSubmit}>
            <div className={`row mb-10  my-3`}>
                <h1 className={'display-6'}>Insert Job Features</h1>
            </div>
            <div className={`fv-row mb-10`}>
                <JobInputField placeholder='Inster job title...' type="text" name="Job Title"
                               formikFieldProps={formik.getFieldProps('jobTitle')}
                               formikTouched={formik.touched.jobTitle}
                               formikErrors={formik.errors.jobTitle}/>
            </div>
            <div className={`fv-row mb-10`}>
                <JobTextareaField placeholder='Type description...' name="Description"
                                  formikFieldProps={formik.getFieldProps('description')}
                                  formikTouched={formik.touched.description}
                                  formikErrors={formik.errors.description} cols={50} rows={4}/>
            </div>
            <div className={`fv-row mb-10`}>
                <label htmlFor="" className={`form-label text-dark fw-bold fs-6`}>Requerements</label>
                <div className={`card card-bordered h-auto mb-10 p-5 d-flex`}>
                    <div className={`row  d-flex justify-content-md-between flex-column flex-md-row mb-5`}>
                        <div className={`col-12 col-md-6 mb-5`}>
                            <JobInputField placeholder='Input required education...' type="text" name="Education"
                                           formikFieldProps={formik.getFieldProps('education')}
                                           formikTouched={formik.touched.education}
                                           formikErrors={formik.errors.education}/>
                        </div>
                        <div className={`col-12 col-md-6`}>
                            <JobInputField placeholder='Type specific skills...' type="text" name="Skills"
                                           formikFieldProps={formik.getFieldProps('skills')}
                                           formikTouched={formik.touched.skills}
                                           formikErrors={formik.errors.skills}/>
                        </div>
                    </div>
                    <div
                        className={`row d-flex justify-content-between align-items-center flex-column flex-md-row mb-5`}>
                        <div className={"col-md-8 col-12 mb-5 "}>
                            <JobInputField placeholder='Insert required languages...' type="text" name="Languages"
                                           formikFieldProps={formik.getFieldProps('languages')}
                                           formikTouched={formik.touched.languages}
                                           formikErrors={formik.errors.languages}/>
                        </div>
                        <div
                            className={'col-12 col-md-4 d-flex justify-content-start mt-2 align-items-center form-check fw-bold form-check-solid pt-2'}>
                            <input type="checkbox"
                                   className={`mx-3`}
                                   onChange={formik.handleChange}
                                   name="driverLicense"
                                   id="driverLicense"
                                   checked={formik.values.driverLicense}/>
                            <label htmlFor="" className={`text-center text-nowrap text-dark fw-bold fs-3`}> Driver
                                license</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`fv-row mb-10`}>
                <JobInputField placeholder='' type="date" name="Application deadline"
                               formikFieldProps={formik.getFieldProps('appDeadline')}
                               formikTouched={formik.touched.appDeadline}
                               formikErrors={formik.errors.appDeadline}/>
            </div>
            <div className={`fv-row mb-10`}>
                <JobTextareaField placeholder='Input instructions...' name="Application instructions"
                                  formikFieldProps={formik.getFieldProps('appInstructions')}
                                  formikTouched={formik.touched.appInstructions}
                                  formikErrors={formik.errors.appInstructions}/>
            </div>


            <div className='d-flex mb-10 justify-content-between align-items-center flex-column flex-md-row'>
                <div className={'col-12 col-md-6'}>
                    <JobInputField placeholder='Insert the open positions number...' type="number"
                                   name="Number of open positions"
                                   formikFieldProps={formik.getFieldProps('numPosition')}
                                   formikTouched={formik.touched.numPosition}
                                   formikErrors={formik.errors.numPosition}/>
                </div>
                <div
                    className={'col-12 col-md-3 d-flex justify-content-start align-items-center form-check fw-bold form-check-solid mt-5 pt-3'}>
                    <input type="checkbox"
                           className={`mx-3`}
                           onChange={formik.handleChange}
                           name="cv"
                           id="cv"
                           checked={formik.values.cv}/>
                    <label htmlFor="" className={`text-dark text-nowrap fw-bold fs-3`}>CV required</label>
                </div>
                <div
                    className={'col-12 d-flex col-md-3 justify-content-start align-items-center  form-check fw-bold form-check-solid mt-5 pt-3'}>
                    <input type="checkbox"
                           className={`mx-3`}
                           onChange={formik.handleChange}
                           name="coverLetter"
                           id="coverLetter"
                           checked={formik.values.coverLetter}/>
                    <label htmlFor="" className={`text-dark text-nowrap fw-bold fs-3`}>Cover letter</label>
                </div>
            </div>


            <div className={`d-flex justify-content-end mb-5`}>
                <button
                    type='submit'
                    id='kt_post_job_submit'
                    className='btn btn-lg btn-primary w-100 w-md-50 w-lg-25 '
                    disabled={formik.isSubmitting || !formik.isValid}
                >
                    {!loading && <span className='indicator-label'>Post job</span>}
                    {loading && (
                        <span className='indicator-progress' style={{display: 'block'}}>
                          Please wait...
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                         </span>
                    )}
                </button>
            </div>
        </form>
    </div>
}