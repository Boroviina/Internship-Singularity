import React from "react";
import classes from './Footer.module.css'
import btnStyle from '../Home/GeneralButton.module.css'
import {AboutUs} from "./AboutUs";
import {ContactInfo} from "./ContactInfo";
export function Footer() {
    return <div className={` position-relative bg-body py-5 `}>
        <footer className={'py-5'}>
            <div className={'container'}>
                <div className={`row d-flex justify-content-between `}>
                    <div className={'col-12 col-lg-7'}>
                        <AboutUs/>
                        <ContactInfo/>
                    </div>
                    <div className={'col-12 col-lg-4 mx-2'}>
                        <form action="">
                            <h5 className={'text-label'}>Subscribe to our newsletter</h5>
                            <p className={'text-label'}>Monthly digest of whats new and exciting from us.</p>
                            <div className={'d-flex w-100 gap-2'}>
                                <input type="text" className={'form-control'} placeholder={'Email address'}
                                       id='newsletter'/>
                                <button className={` btn btn-white overflow-visible`} type={'button'} style={{height:'50px'}}>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={'d-flex justify-content-between py-4 my-4 border-top'}>
                <p className={'text-label'}>© 2023 Job Radar, Inc. All rights reserved</p>
            </div>
        </footer>
    </div>
}