import React from "react";

export function AboutUs(){
    return  <div className={`col-12 col-lg-3 d-block justify-content-start w-100  mb-1 `}>
        <a className={'btn btn-carrousel'} data-bs-toggle='collapse' href='#collapseAbout'
           role={'button'}
           aria-expanded={'false'} aria-controls={'collapseAbout'}>ABOUT US</a>

        <div className={'z-3 mb-2'}>
            <div className="collapse" id="collapseAbout">
                <div className="card card-bg p-4 w-100">
                    Welcome to Job Radar, the ultimate job seeker's app! <br/> <br/>We're here to
                    simplify your job search and connect you with a world of opportunities. <br/>

                    With an extensive range of job listings across various industries, including
                    computing,
                    medicine, and more, we provide a diverse array of choices to suit your career
                    aspirations. <br/> <br/>

                    Our user-friendly interface and smart filters make it easy to navigate and find
                    the
                    perfect job. <br/>
                    Get personalized recommendations based on your skills and preferences, saving
                    you
                    time
                    and effort.

                    Explore detailed company profiles, track your applications, and access
                    professional
                    development resources to enhance your skills. Join our supportive community of
                    job
                    seekers and professionals to network and learn from others.
                    <div className={'d-flex justify-content-end'}>
                        <button className={`btn close-btn p-2 text-center  w-25 my-4`}
                                type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseAbout"
                                aria-expanded="false" aria-controls="collapseAbout">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}