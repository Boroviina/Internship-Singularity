import React from "react";
import {Link} from "react-router-dom";

export function About() {
    return <div className={`bg-secondary rounded shadow-sm p-10 p-lg-15 mx-auto fade-in-up w-100`}>
            <h1 className={'display-4 text-gray-700 mb-5'}>
                About
            </h1>
            <p className={'fs-3 text-gray-700 my-5 mt-auto'}>
                Welcome to <b>Job Radar</b>,the ultimate job seeker's app! <br/> <br/> We're here to simplify your job search and connect you with a world of opportunities. <br/>

                With an extensive range of job listings across various industries, including computing, medicine, and more, we provide a diverse array of choices to suit your career aspirations. <br/> <br/>

                Our user-friendly interface and smart filters make it easy to navigate and find the perfect job. <br/>
                Get personalized recommendations based on your skills and preferences, saving you time and effort.

                Explore detailed company profiles, track your applications, and access professional development resources to enhance your skills. Join our supportive community of job seekers and professionals to network and learn from others.
            </p>
        <div className={'d-flex justify-content-end mt-10'}>
            <h2 className={'display-4 text-gray-700'}>Good Luck! </h2>
        </div>
        <div className={'d-flex justify-content-end mt-10'}>
        <Link to='/auth/login'>
            <button
                type='button'
                id='kt_login_signup_form_cancel_button'
                className='btn btn-lg btn-light-primary w-100 mb-3 text-nowrap'
            >
               Go Back!
            </button>
        </Link>
        </div>

    </div>
}