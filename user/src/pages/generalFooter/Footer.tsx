import React from "react";
import classes from './Footer.module.css'

export function Footer() {
    return <div className={`container position-relative ${classes.footer}`}>
        <footer className={'py-5'}>
            <div className={`row d-flex justify-content-between `}>
                <div className={'col-12 col-lg-7'}>
                    <div className={`col-12 col-lg-3 d-block justify-content-start w-100  mb-1 `}>
                        <a className={'btn text-light'} data-bs-toggle='collapse' href='#collapseAbout' role={'button'}
                           aria-expanded={'false'} aria-controls={'collapseAbout'}>ABOUT US</a>

                        <div className={'z-3 mb-2'}>
                            <div className="collapse" id="collapseAbout">
                                <div className="card card-body w-100">
                                    Welcome to Job Radar, the ultimate job seeker's app! <br/> <br/>We're here to
                                    simplify your job search and connect you with a world of opportunities. <br/>

                                    With an extensive range of job listings across various industries, including
                                    computing,
                                    medicine, and more, we provide a diverse array of choices to suit your career
                                    aspirations. <br/> <br/>

                                    Our user-friendly interface and smart filters make it easy to navigate and find the
                                    perfect job. <br/>
                                    Get personalized recommendations based on your skills and preferences, saving you
                                    time
                                    and effort.

                                    Explore detailed company profiles, track your applications, and access professional
                                    development resources to enhance your skills. Join our supportive community of job
                                    seekers and professionals to network and learn from others.
                                    <div className={'d-flex justify-content-end'}>
                                        <button className={`btn ${classes.closeButton} text-white w-25 my-4`} type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseAbout"
                                                aria-expanded="false" aria-controls="collapseAbout">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-12 col-sm-5 '}>
                        <a className={' text-light mb-3 btn text-light'} data-bs-toggle='collapse'
                           href='#collapseContact'
                           role={'button'} aria-expanded={'false'} aria-controls={'collapseContact'}>CONTACT INFO</a>
                        <div className={'collapse'} id="collapseContact">
                            <div className={'mx-4 d-flex flex-column'}>
                                <div className={'row d-flex flex-column flex-sm-row text-light'}>
                                    <label className={'my-1 text-nowrap col-12 col-sm-6'}
                                           htmlFor=""><b>Address:</b></label>
                                    <label className={'my-1  text-nowrap col-12 col-sm-6'} htmlFor=""> <a
                                        className={'text-decoration-none'}
                                        target="_blank"
                                        href="https://www.google.com/maps/place/Isto%C4%8Dno+Sarajevo/@43.8226316,18.3662468,18.75z/data=!4m6!3m5!1s0x4758c9bb85702121:0xfe263b34ee7c6729!8m2!3d43.8217132!4d18.3683774!16zL20vMGJ5bDV0?entry=ttu">Stefana
                                        Nemanje</a></label>
                                </div>
                                <div className={'row d-flex flex-column flex-sm-row'}>
                                    <label className={'my-1 text-nowrap col-12 col-sm-6'} htmlFor=""><b>City:</b>
                                    </label>
                                    <label className={'my-1 text-nowrap col-12 col-sm-6'} htmlFor=""><a
                                        className={'text-decoration-none'}
                                        target="_blank"
                                        href="https://www.google.com/maps/place/Isto%C4%8Dno+Sarajevo/@43.85756,18.3506324,10z/data=!3m1!4b1!4m6!3m5!1s0x4758c9bb85702121:0xfe263b34ee7c6729!8m2!3d43.8217132!4d18.3683774!16zL20vMGJ5bDV0?entry=ttu">Istocno
                                        Sarajevo</a></label>
                                </div>
                                <div className={'row d-flex flex-column flex-sm-row'}>
                                    <label className={'my-1 text-nowrap col-12 col-sm-6'}
                                           htmlFor=""><b>Country:</b></label>
                                    <label className={'my-1 text-nowrap col-12 col-sm-6'} htmlFor="">Bosna i
                                        Hercegovina</label>
                                </div>
                                <div className={'row d-flex flex-column flex-sm-row'}>
                                    <label className={'my-1 text-nowrap col-12 col-sm-6'} htmlFor=""><b>Postal
                                        Code:</b></label>
                                    <label className={'my-1 text-nowrap col-12 col-sm-6'} htmlFor=""> 71123 </label>
                                </div>
                                <div className={'row d-flex flex-column flex-sm-row'}>
                                    <label className={'my-1 text-nowrap col-12 col-sm-6 '}
                                           htmlFor=""><b>Phone:</b></label>
                                    <label className={'my-1 text-nowrap col-12 col-sm-6 '}
                                           htmlFor="">057/557-256 </label>
                                </div>
                                <div className={'row d-flex flex-column flex-sm-row'}>
                                    <label className={'my-1 text-nowrap  col-12 col-sm-6'}
                                           htmlFor=""><b>E-mail:</b></label>
                                    <label className={'my-1 text-nowrap col-12 col-sm-6'} htmlFor=""> <a
                                        className={'text-decoration-none'} target="_blank"
                                        href="mailto:jobradar@gmail.com">jobradar@gmail.com</a></label>
                                </div>
                                <div className={'d-flex justify-content-end'}>
                                    <button className={`btn btn-dark w-50 my-4`} type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseContact"
                                            aria-expanded="false" aria-controls="collapseContact">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-12 col-lg-4 mx-2'}>
                    <form action="">
                        <h5 className={'text-light'}>Subscribe to our newsletter</h5>
                        <p className={'text-light'}>Monthly digest of whats new and exciting from us.</p>
                        <div className={'d-flex w-100 gap-2'}>
                            <input type="text" className={'form-control'} placeholder={'Email address'}
                                   id='newsletter'/>
                            <button className={` ${classes.btn3}`} type={'button'}>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={'d-flex justify-content-between py-4 my-4 border-top'}>
                <p className={'text-light'}>© 2023 Job Radar, Inc. All rights reserved</p>
            </div>
        </footer>
    </div>
}