import React from "react";
import {useFormik} from "formik";
import {getUserByToken, login} from "../modules/auth/core/_requests";
import * as Yup from "yup";

export function JobPosting() {


    return <div className={`w-lg-1024px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto fade-in-up`}>
        <form action="" className={`form`}>
            <div className={`row p-4 my-3`}>
                <h1>Insert Job Features</h1>
            </div>
            <div className={`fv-row mb-10`}>
                <label htmlFor="" className={`form-label text-dark fw-bold fs-6 required`}>Job title</label>
                <input type="text" className={`form-control form-control-lg form-control-solid`}
                       placeholder='Inster job title...'/>
            </div>
            <div className={`fv-row mb-10`}>
                <label htmlFor="" className={`form-label text-dark fw-bold fs-6 required`}>Description</label>
                <textarea cols={50} rows={4} className={`form-control form-control-lg form-control-solid`}
                          placeholder='Type description...'></textarea>
            </div>
            <div className={`fv-row mb-10`}>
                <label htmlFor="" className={`form-label text-dark fw-bold fs-6`}>Requerements</label>
                <div className={`card card-bordered h-auto mb-10 p-5 d-flex`}>
                    <div className={`row  d-flex justify-content-md-between flex-column flex-md-row mb-5`}>
                        <div className={`col-12 col-md-6 mb-5`}>
                            <label htmlFor="" className={`form-label text-dark fw-bold fs-6`}>Education</label>
                            <input type="text" className={`form-control form-control-lg form-control-solid`}
                                   placeholder='Input requered education...'/>
                        </div>
                        <div className={`col-12 col-md-6`}>
                            <label htmlFor="" className={`form-label text-dark fw-bold fs-6`}>Skills</label>
                            <input type="text" className={`form-control form-control-lg form-control-solid`}
                                   placeholder='Type specific skills...'/>
                        </div>
                    </div>
                    <div
                        className={`row d-flex justify-content-between align-items-md-center flex-column flex-md-row mb-5`}>
                        <div
                            className={`col-12 col-md-8 flex-column d-flex align-items-center justify-content-between flex-md-row `}>
                            <div className={"col-md-7 col-12 mb-5 "}>
                                <label htmlFor="" className={`form-label text-dark fw-bold fs-6`}>Language</label>
                                <select name="languages-select"
                                        className={`form-select form-select-solid form-select-lg`}
                                        id="sel-lang" aria-label="Select language">
                                    <option value="rs" defaultValue={'Choose option'}>Not Required</option>
                                    <option value="en">English</option>
                                    <option value="de">German</option>
                                    <option value="fr">France</option>
                                    <option value="rs">Russian</option>
                                </select>
                            </div>
                            <div className={`col-12 col-md-3 mb-5`}>
                                <label htmlFor="" className={`form-label text-dark fw-bold fs-6 text-nowrap`}>Language
                                    level</label>
                                <div>
                                    <select disabled name="languages-select" className={`form-select form-select-solid`}
                                            id="sel-lang" aria-label="Select language">
                                        <option value="rs" defaultValue={'Choose option'}>Choose...</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div
                            className={'col-4 d-flex justify-content-start align-items-center form-check fw-bold form-check-solid p-5'}>
                            <input type="checkbox" className={`mx-3`}/>
                            <label htmlFor="" className={`text-center text-dark fw-bold fs-3`}> Driver license</label>
                        </div>
                    </div>
                </div>
                <div className={`fv-row mb-10`}>
                    <label htmlFor="" className={`form-label text-dark fw-bold fs-6 required`}>Application
                        deadline</label>
                    <input type="datetime-local" className={`form-control form-control-lg form-control-solid`}/>
                </div>
                <div className={`fv-row mb-10`}>
                    <label htmlFor="" className={`form-label text-dark fw-bold fs-6 required`}>Application
                        instructions</label>
                    <textarea className={`mb-5 form-control form-control-lg form-control-solid`}
                              placeholder='Input instructions...'></textarea>
                    <div className='d-flex justify-content-sm-around flex-md-row flex-column'>
                        <div className={'d-flex justify-content-start form-check fw-bold form-check-solid p-5'}>
                            <input type="checkbox" className={`mx-3`}/>
                            <label htmlFor="" className={`text-dark fw-bold fs-3`}>CV required</label>
                        </div>
                        <div className={'d-flex justify-content-start form-check fw-bold form-check-solid p-5'}>
                            <input type="checkbox" className={`mx-3`}/>
                            <label htmlFor="" className={`text-dark fw-bold fs-3`}>Cover letter</label>
                        </div>
                    </div>
                </div>
                <div className={`d-flex justify-content-end mb-5`}>
                    <button
                        type='submit'
                        id='kt_post_job_submit'
                        className='btn btn-lg btn-primary w-100 w-md-50 '
                        // disabled={formik.isSubmitting || !formik.isValid}
                    >
                        Post Job
                    </button>
                </div>
            </div>
        </form>
    </div>
}