import {Link} from "react-router-dom";
import React from "react";

export function Contact() {
    return <div
        className={` row text-gray-700 fs-1 bg-secondary rounded shadow-sm p-10 p-lg-15 mx-auto fade-in-up w-100`}>
        <div className={'d-flex flex-column col-6'}>
            <label className={'my-1'} htmlFor=""><b>Company Name:</b></label>
            <label className={'my-1'} htmlFor=""><b>Address:</b></label>
            <label className={'my-1'} htmlFor=""><b>City:</b> </label>
            <label className={'my-1'} htmlFor=""><b>Country:</b></label>
            <label className={'my-1'} htmlFor=""><b>Postal Code:</b></label>
            <label className={'mt-6 my-1'} htmlFor=""><b>Phone:</b></label>
            <label className={'my-1'} htmlFor=""><b>E-mail:</b></label>
        </div>
        <div className={'d-flex flex-column col-6'}>
            <label className={'my-1 '} htmlFor="">Job Radar</label>
            <label className={'my-1'} htmlFor=""> <a className={'text-gray-700 text-hover-primary'} target="_blank"
                                                     href="https://www.google.com/maps/place/Isto%C4%8Dno+Sarajevo/@43.8226316,18.3662468,18.75z/data=!4m6!3m5!1s0x4758c9bb85702121:0xfe263b34ee7c6729!8m2!3d43.8217132!4d18.3683774!16zL20vMGJ5bDV0?entry=ttu">Stefana
                Nemanje</a></label>
            <label className={'my-1'} htmlFor=""><a className={'text-gray-700 text-hover-primary'} target="_blank"
                                                    href="https://www.google.com/maps/place/Isto%C4%8Dno+Sarajevo/@43.85756,18.3506324,10z/data=!3m1!4b1!4m6!3m5!1s0x4758c9bb85702121:0xfe263b34ee7c6729!8m2!3d43.8217132!4d18.3683774!16zL20vMGJ5bDV0?entry=ttu">Istocno
                Sarajevo</a></label>
            <label className={'my-1'} htmlFor="">Bosna i Hercegovina</label>
            <label className={'my-1'} htmlFor=""> 71123 </label>
            <label className={'mt-6 my-1'} htmlFor="">057/557-256 </label>
            <label className={'my-1'} htmlFor=""> <a className={'text-gray-700 text-hover-primary'} target="_blank"
                                                     href="mailto:jobradar@gmail.com">jobradar@gmail.com</a></label>
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