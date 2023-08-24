import React, {useState} from 'react';
import {JobInputField, JobTextareaField} from "./JobInputField";
import {KTSVG} from "../../../_metronic/helpers";
import {useNavigate} from "react-router-dom";
import clsx from "clsx";
import {JobTypes} from "../../shared/enums/job-types.enum";

export function JobDetailsForm(props) {

    const navigate = useNavigate();

    return <div className={`w-lg-1024px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto fade-in-up`}>
        <form action=""
              className={`form`}
              onSubmit={props.formik.handleSubmit}>
            <div className={` mb-10 my-3 d-flex justify-content-start align-items-center`}>
                <button className={'btn btn-light-dark col-1 m-5'} onClick={() => navigate('/job-listings')}>
                    <KTSVG path={`/media/icons/duotune/arrows/arr021.svg`}
                           className={'svg-icon svg-icon-2x  svg-icon-'}/>
                </button>
                <h1 className={'display-6'}>{props.title}</h1>
            </div>
            <div className={`fv-row mb-10`}>
                <JobInputField placeholder='Instert job title...' type="text" name="Job Title"
                               formikFieldProps={props.formik.getFieldProps('jobTitle')}
                               formikTouched={props.formik.touched.title}
                               formikErrors={props.formik.errors.title}
                />
            </div>
            <div className={'fv-row mb-10'}>
                <label htmlFor="" className={'form-label text-dark fw-bold fs-6 '}>Job type</label>
                <select name="jobType" id="jobType"
                        {...props.formik.getFieldProps('jobType')}
                        className={clsx(
                            `form-control form-control-solid `,
                            {'is-invalid': props.formik.touched.jobType && props.formik.errors.jobType},
                            {'is-valid': props.formik.touched.jobType && !props.formik.errors.jobType }
                        )}

                >
                    <option value=""></option>
                    {Object.entries(JobTypes).map(([key, value]) => (
                        <option value={key} key={key}>{value}</option>
                    ))}
                </select>
                {props.formik.touched.jobType && props.formik.errors.jobType ? (
                    <div className={'text-danger mt-1 fs-6 italic'}>{props.formik.errors.jobType}</div>) : null}
            </div>
            <div className={`fv-row mb-10`}>
                <JobTextareaField placeholder='Type description...' name="Description"
                                  formikFieldProps={props.formik.getFieldProps('description')}
                                  formikTouched={props.formik.touched.description}
                                  formikErrors={props.formik.errors.description} cols={50} rows={4}/>
            </div>
            <div className={`fv-row mb-10`}>
                <label htmlFor="" className={`form-label text-dark fw-bold fs-6`}>Requerements</label>
                <div className={`card card-bordered h-auto mb-10 p-5 d-flex`}>
                    <div className={`row  d-flex justify-content-md-between flex-column flex-md-row mb-5`}>
                        <div className={`col-12 col-md-6 mb-5`}>
                            <JobInputField placeholder='Input required education...' type="text" name="Education"
                                           formikFieldProps={props.formik.getFieldProps('requirements.education')}
                                           formikTouched={props.formik.touched.requirements && props.formik.touched.requirements.education}
                                           formikErrors={props.formik.errors.requirements && props.formik.errors.requirements.education}/>
                        </div>
                        <div className={`col-12 col-md-6`}>
                            <JobInputField placeholder='Type specific skills...' type="text" name="Skills"
                                           formikFieldProps={props.formik.getFieldProps('requirements.skills')}
                                           formikTouched={props.formik.touched.requirements && props.formik.touched.requirements.skills}
                                           formikErrors={props.formik.errors.requirements && props.formik.errors.requirements.skills}/>
                        </div>
                    </div>
                    <div
                        className={`row d-flex justify-content-between align-items-center flex-column flex-md-row mb-5`}>
                        <div className={"col-md-8 col-12 mb-5 "}>
                            <JobInputField placeholder='Insert required languages...' type="text" name="Languages"
                                           formikFieldProps={props.formik.getFieldProps('requirements.language')}
                                           formikTouched={props.formik.touched.requirements && props.formik.touched.requirements.language}
                                           formikErrors={props.formik.errors.requirements && props.formik.errors.requirements.language}/>
                        </div>
                        <div
                            className={'form-check-solid col-12 col-md-4 d-flex justify-content-start mt-2 align-items-center fw-bold pt-2'}>
                            <input type="checkbox"
                                   className={`form-check-input mx-3`}
                                   onChange={props.formik.handleChange}
                                   name="requirements.drivingLicense"
                                   id="drivingLicense"
                                   checked={props.formik.values.requirements?.drivingLicense || false}/>
                            <label htmlFor="" className={`text-center text-nowrap text-dark fw-bold fs-3`}> Driver
                                license</label>
                        </div>
                    </div>
                    <div
                        className={`row d-flex justify-content-between align-items-center flex-column flex-md-row mb-5`}>
                        <div className={"col-12 mb-5 "}>
                            <JobInputField placeholder='Insert required specialization...' type="text"
                                           name="Specialization"
                                           formikFieldProps={props.formik.getFieldProps('requirements.specialization')}
                                           formikTouched={props.formik.touched.requirements && props.formik.touched.requirements.specialization}
                                           formikErrors={props.formik.errors.requirements && props.formik.errors.requirements.specialization}/>
                        </div>
                    </div>
                    <div
                        className={`row d-flex justify-content-between align-items-center flex-column flex-md-row mb-5`}>
                        <div className={"col-12 mb-5 "}>
                            <JobInputField placeholder='Insert required specialization...' type="text" name="Experience"
                                           formikFieldProps={props.formik.getFieldProps('requirements.experience')}
                                           formikTouched={props.formik.touched.requirements && props.formik.touched.requirements.experience}
                                           formikErrors={props.formik.errors.requirements && props.formik.errors.requirements.experience}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`fv-row mb-10`}>
                <JobInputField placeholder='' type="date" name="Application deadline"
                               formikFieldProps={props.formik.getFieldProps('appDeadline')}
                               formikTouched={props.formik.touched.appDeadline}
                               formikErrors={props.formik.errors.appDeadline}/>
            </div>
            <div className={`fv-row mb-10`}>
                <JobTextareaField placeholder='Input instructions...' name="Application instructions"
                                  formikFieldProps={props.formik.getFieldProps('appInstructions')}
                                  formikTouched={props.formik.touched.appInstructions}
                                  formikErrors={props.formik.errors.appInstructions}/>
            </div>
            <div>
                <div className={`fv-row mb-10`}>
                    <JobInputField placeholder='Input location/adress' type="text" name="Location"
                                   formikFieldProps={props.formik.getFieldProps('location')}
                                   formikTouched={props.formik.touched.location}
                                   formikErrors={props.formik.errors.location}/>
                </div>
            </div>
            <div className={`row  d-flex justify-content-md-between flex-column flex-md-row mb-5`}>
                <div className={`fv-row col-12 col-md-6 mb-10`}>
                    <JobInputField placeholder='Input employment type' type="text" name="Employment type"
                                   formikFieldProps={props.formik.getFieldProps('employmentType')}
                                   formikTouched={props.formik.touched.employmentType}
                                   formikErrors={props.formik.errors.employmentType}/>
                </div>
                <div className={`fv-row col-12 col-md-6 mb-10`}>
                    <JobInputField placeholder='Input job type' type="text" name="Remote"
                                   formikFieldProps={props.formik.getFieldProps('remote')}
                                   formikTouched={props.formik.touched.remote}
                                   formikErrors={props.formik.errors.remote}/>
                </div>
            </div>
            <div className={`fv-row col-12 mb-10`}>
                <JobInputField placeholder='Input amount...' type="text" name="Salary"
                               formikFieldProps={props.formik.getFieldProps('salary')}
                               formikTouched={props.formik.touched.salary}
                               formikErrors={props.formik.errors.salary}/>
            </div>


            <div className='d-flex mb-10 justify-content-between align-items-center flex-column flex-md-row'>
                <div className={'col-12 col-md-6'}>
                    <JobInputField placeholder='Insert the open positions number...' type="number"
                                   name="Number of open positions"
                                   formikFieldProps={props.formik.getFieldProps('positionsNum')}
                                   formikTouched={props.formik.touched.positionsNum}
                                   formikErrors={props.formik.errors.positionsNum}/>
                </div>
                <div
                    className={'form-check-solid col-12 col-md-3 d-flex justify-content-start align-items-center fw-bold mt-5 pt-3'}>
                    <input type="checkbox"
                           className={`form-check-input mx-3`}
                           onChange={props.formik.handleChange}
                           name="cv"
                           id="cv"
                           checked={props.formik.values.cv}/>
                    <label htmlFor="" className={`text-dark text-nowrap fw-bold fs-3`}>CV required</label>
                </div>
                <div
                    className={'form-check-solid col-12 d-flex col-md-3 justify-content-start align-items-center fw-bold mt-5 pt-3'}>
                    <input type="checkbox"
                           className={`form-check-input mx-3`}
                           onChange={props.formik.handleChange}
                           name="coverLetter"
                           id="coverLetter"
                           checked={props.formik.values.coverLetter}/>
                    <label htmlFor="" className={`text-dark text-nowrap fw-bold fs-3`}>Cover letter</label>
                </div>
            </div>


            <div className={`d-flex justify-content-end mb-5`}>
                <button
                    type='submit'
                    id='kt_post_job_submit'
                    className='btn btn-lg btn-primary w-100 w-md-50 w-lg-25 '
                    disabled={props.formik.isSubmitting || !props.formik.isValid}
                >
                    {!props.loading && <span className='indicator-label'>{props.command}</span>}
                    {props.loading && (
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