import React from "react";
import background from './imageIcons/blackTextured.jpg'
import searchIcon from './imageIcons/searchJobIcon.png'
import applyIcon from './imageIcons/apply.png'
import getJob from './imageIcons/getJob.png'

export function ApplyProcess() {
    return <div>
        <div className={'container mt-5'}>
            <div className={'row text-center mb-5 '}>
                <span className={'fs-4'} style={{color: '#fb246a'}}>APPLY PROCESS</span>
                <h2 className={'display-2 text-label '}>How it works</h2>
            </div>
        </div>
        <div className={'py-5 align-items-center d-flex justify-content-center bgi-no-repeat bgi-position-center'}
             style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <div
                className={'container position-relative d-flex flex-column flex-md-row justify-content-center align-items-center my-3 '}>
                <div className={'row d-flex justify-content-center'}>
                    <div className={'col-lg-4 card-bg mt-3 mt-lg-0  col-xl-4 col-md-3  d-flex flex-row flex-md-column justify-content-center w-auto  py-lg-4 py-xl-5'}>
                        <div className={' text-center w-auto mb-3 my-4 w-auto'}>
                            <div className={'my-3'}>
                                    <span>
                                        <img src={searchIcon} alt=""/>
                                    </span>
                            </div>
                            <div className={''}>
                                <h5 className={'text-white my-4 text-nowrap'}>1. Search a job</h5>
                                <p className={'text-white d-none d-md-block p-1'}>
                                    Search for job on our page,<br/> use keywords or job titles
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={'col-lg-4 card-bg mt-3 mt-lg-0  mx-4 w-auto col-xl-4 col-md-3  py-lg-4 py-xl-5'}>
                        <div className={' text-center w-auto mb-3 my-4 w-auto'}>
                            <div className={'my-3'}>
                                    <span>
                                        <img src={applyIcon} alt=""/>
                                    </span>
                            </div>
                            <div>
                                <h5 className={'text-white my-4 text-nowrap'}>1. Apply for job</h5>
                                <p className={'text-white text-wrap p-1 d-none d-md-block'}>
                                    Insert your data, CV and Cover Letter.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={'col-lg-4 card-bg col-xl-4 mt-3 mt-lg-0  w-auto col-md-12  py-lg-4 py-xl-5'}>
                        <div className={' text-center w-auto mb-3 my-5 w-auto'}>
                            <div className={'my-3'}>
                                    <span>
                                        <img src={getJob} alt=""/>
                                    </span>
                            </div>
                            <div>
                                <h5 className={'text-white my-4 text-nowrap'}>3. Get your job</h5>
                                <p className={'text-white p-1 text-wrap d-none d-md-block'}>
                                    Be sure you will get your dream job!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}