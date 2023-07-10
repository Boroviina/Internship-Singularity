import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {createJob} from "../../shared/services/job.service";


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
        onSubmit: async (values,  {resetForm, setStatus, setSubmitting}) => {
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
            <div className={`row p-4 my-3`}>
                <h1>Insert Job Features</h1>
            </div>
            <div className={`fv-row mb-10`}>
                <label htmlFor="jobTitle" className={`form-label text-dark fw-bold fs-6 required`}>Job title</label>
                <input type="text"
                       className={`form-control form-control-lg form-control-solid`}
                       placeholder='Inster job title...'
                       name="jobTitle"
                       id="jobTitle"
                       onChange={formik.handleChange}
                       value={formik.values.jobTitle}
                       onBlur={formik.handleBlur}/>
                {formik.touched.jobTitle && formik.errors.jobTitle ? (
                    <div className={'text-danger mt-1 fs-6 italic'}>{formik.errors.jobTitle}</div>) : null}
            </div>
            <div className={`fv-row mb-10`}>
                <label htmlFor="" className={`form-label text-dark fw-bold fs-6 required`}>Description</label>
                <textarea cols={50} rows={4}
                          className={`form-control form-control-lg form-control-solid`}
                          placeholder='Type description...'
                          onChange={formik.handleChange}
                          name="description"
                          id="description"
                          value={formik.values.description}
                          onBlur={formik.handleBlur}></textarea>
                {formik.touched.description && formik.errors.description ? (
                    <div className={'text-danger mt-1 fs-6 italic'}>{formik.errors.description}</div>) : null}
            </div>
            <div className={`fv-row mb-10`}>
                <label htmlFor="" className={`form-label text-dark fw-bold fs-6`}>Requerements</label>
                <div className={`card card-bordered h-auto mb-10 p-5 d-flex`}>
                    <div className={`row  d-flex justify-content-md-between flex-column flex-md-row mb-5`}>
                        <div className={`col-12 col-md-6 mb-5`}>
                            <label htmlFor="" className={`form-label text-dark fw-bold fs-6`}>Education</label>
                            <input type="text"
                                   className={`form-control form-control-lg form-control-solid`}
                                   placeholder='Input required education...'
                                   onChange={formik.handleChange}
                                   name="education"
                                   id="education"
                                   value={formik.values.education}/>
                            {formik.errors.education ? (
                                <div className={'text-danger mt-1 fs-6 italic'}>{formik.errors.education}</div>) : null}
                        </div>
                        <div className={`col-12 col-md-6`}>
                            <label htmlFor="" className={`form-label text-dark text-nowrap fw-bold fs-6`}>Specific
                                skills</label>
                            <input type="text"
                                   className={`form-control form-control-lg form-control-solid`}
                                   placeholder='Type specific skills...'
                                   onChange={formik.handleChange}
                                   name="skills"
                                   id="skills"
                                   value={formik.values.skills}/>
                            {formik.errors.skills ? (
                                <div className={'text-danger mt-1 fs-6 italic'}>{formik.errors.skills}</div>) : null}
                        </div>
                    </div>
                    <div
                        className={`row d-flex justify-content-between align-items-md-center flex-column flex-md-row mb-5`}>
                        <div
                            className={`col-12 col-md-8 flex-column d-flex align-items-center justify-content-between flex-md-row `}>
                            <div className={"col-md-11 col-12 mb-5 "}>
                                <label htmlFor="" className={`form-label text-dark fw-bold fs-6`}>Languages</label>
                                <input type={"text"}
                                       className={`form-control form-control-solid form-control-lg`}
                                       placeholder={'Insert required languages...'}
                                       onChange={formik.handleChange}
                                       name="languages"
                                       id="languages"
                                       value={formik.values.languages}>
                                </input>
                                {formik.errors.languages ? (<div
                                    className={'text-danger mt-1 fs-6 italic'}>{formik.errors.languages}</div>) : null}
                            </div>
                        </div>
                        <div
                            className={'col-4 d-flex justify-content-start align-items-center form-check fw-bold form-check-solid p-5'}>
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
                <div className={`fv-row mb-10`}>
                    <label htmlFor="" className={`form-label text-dark fw-bold fs-6 required`}>Application
                        deadline</label>
                    <input type="date"
                           className={`form-control form-control-lg form-control-solid`}
                           onChange={formik.handleChange}
                           name="appDeadline"
                           id="appDeadline"
                           value={formik.values.appDeadline}
                           onBlur={formik.handleBlur}/>
                    {formik.touched.appDeadline && formik.errors.appDeadline ? (
                        <div
                            className={'text-danger mt-1 fs-6 italic'}>{formik.errors.appDeadline}</div>) : null}
                </div>
                <div className={`fv-row mb-10`}>
                    <label htmlFor="" className={`form-label text-dark fw-bold fs-6 required`}>Application
                        instructions</label>
                    <textarea className={`form-control form-control-lg form-control-solid`}
                              placeholder='Input instructions...'
                              onChange={formik.handleChange}
                              name="appInstructions"
                              id="appInstructions"
                              value={formik.values.appInstructions}
                              onBlur={formik.handleBlur}></textarea>
                    {formik.touched.appInstructions && formik.errors.appInstructions ? (
                        <div className={'text-danger mt-1 fs-6 italic'}>{formik.errors.appInstructions}</div>) : null}

                    <div className='d-flex justify-content-sm-start align-items-center flex-md-row flex-column mt-5'>
                        <div className={'col-12 col-md-6'}>
                            <label htmlFor="" className={`form-label text-dark fw-bold fs-6 required`}>Number of open
                                positions</label>
                            <input type="number"
                                   min={0}
                                   placeholder={'Insert the open positions number'}
                                   className={`form-control form-control-lg form-control-solid`}
                                   onChange={formik.handleChange}
                                   name="numPosition"
                                   id="numPosition"
                                   onBlur={formik.handleBlur}
                                   value={formik.values.numPosition}/>
                            {formik.touched.numPosition && formik.errors.numPosition ? (
                                <div
                                    className={'text-danger mt-1 fs-6 italic'}>{formik.errors.numPosition}</div>) : null}
                        </div>
                        <div
                            className={'d-flex align-items-center justify-content-start form-check fw-bold form-check-solid p-5'}>
                            <input type="checkbox"
                                   className={`mx-3`}
                                   onChange={formik.handleChange}
                                   name="cv"
                                   id="cv"
                                   checked={formik.values.cv}/>
                            <label htmlFor="" className={`text-dark fw-bold fs-3`}>CV required</label>
                        </div>
                        <div
                            className={'d-flex justify-content-start align-items-center form-check fw-bold form-check-solid p-5'}>
                            <input type="checkbox"
                                   className={`mx-3`}
                                   onChange={formik.handleChange}
                                   name="coverLetter"
                                   id="coverLetter"
                                   checked={formik.values.coverLetter}/>
                            <label htmlFor="" className={`text-dark fw-bold fs-3`}>Cover letter</label>
                        </div>
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
            </div>
        </form>
    </div>
}