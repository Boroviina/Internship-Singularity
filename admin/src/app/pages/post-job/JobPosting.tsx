import React, {useState} from "react";
import {useFormik} from "formik";


export function JobPosting() {

    const formik = useFormik({
        initialValues: {
            jobTitle: '',
            description: '',
            education: '',
            skills: '',
            languages: '',
            driverLicense: false,
            appDeadline: null,
            appInstructions: '',
            positionNum: '',
            cv: false,
            coverLetter: false,
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return <div className={`w-lg-1024px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto fade-in-up`}>
        <form action="" className={`form`} onSubmit={formik.handleSubmit}>
            <div className={`row p-4 my-3`}>
                <h1>Insert Job Features</h1>
            </div>
            <div className={`fv-row mb-10`}>
                <label htmlFor="" className={`form-label text-dark fw-bold fs-6 required`}>Job title</label>
                <input type="text"
                       className={`form-control form-control-lg form-control-solid`}
                       placeholder='Inster job title...'
                       name="jobTitle"
                       id="jobTitle"
                       onChange={formik.handleChange}
                       value={formik.values.jobTitle}/>
            </div>
            <div className={`fv-row mb-10`}>
                <label htmlFor="" className={`form-label text-dark fw-bold fs-6 required`}>Description</label>
                <textarea cols={50} rows={4}
                          className={`form-control form-control-lg form-control-solid`}
                          placeholder='Type description...'
                          onChange={formik.handleChange}
                          name="description"
                          id="description"
                          value={formik.values.description}></textarea>
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
                    <input type="datetime-local"
                           className={`form-control form-control-lg form-control-solid`}
                           onChange={formik.handleChange}
                           name="appDeadline"
                           id="appDeadline"
                           value={formik.values.appDeadline}/>
                </div>
                <div className={`fv-row mb-10`}>
                    <label htmlFor="" className={`form-label text-dark fw-bold fs-6 required`}>Application
                        instructions</label>
                    <textarea className={`mb-5 form-control form-control-lg form-control-solid`}
                              placeholder='Input instructions...'
                              onChange={formik.handleChange}
                              name="appInstructions"
                              id="appInstructions"
                              value={formik.values.appInstructions}></textarea>
                    <div className='d-flex justify-content-sm-start align-items-center flex-md-row flex-column'>
                        <div className={'col-12 col-md-6'}>
                            <label htmlFor="" className={`form-label text-dark fw-bold fs-6 required`}>Number of open
                                positions</label>
                            <input type="number"
                                   placeholder={'Insert the number of open position'}
                                   className={`form-control form-control-lg form-control-solid`}
                                   onChange={formik.handleChange}
                                   name="numPosition"
                                   id="numPosition"
                                   value={formik.values.positionNum}/>
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
                        // disabled={formik.isSubmitting || !formik.isValid}
                    >
                        Post Job
                    </button>
                </div>
            </div>
        </form>
    </div>
}