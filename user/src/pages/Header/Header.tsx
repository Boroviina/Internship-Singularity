import React, {useState, useContext} from "react";
import classes from './Header.module.css';
import {CustomLogo} from "./CustomLogo";
import btnStyle from '../Home/GeneralButton.module.css'
import {useNavigate} from "react-router-dom";
import ReactSwitch from "react-switch";
import Toggle from "react-bootstrap-toggle";
import ThemeContext from "../../theme-context/ThemeContext";

export function Header() {
    const ctx = useContext(ThemeContext);
    const navigate = useNavigate();
    const registerClickHandle = () => {
        navigate('/auth/registration')
    }

    return (
        <header>
            <div className={'d-block p-4 '}>
                <div className={'d-block'}>
                    <div className={'container d-block'}>
                        <div className={'row  align-items-center'}>
                            <div
                                className={'col-lg-3 col-md-4 col-7 d-flex flex-row justify-content-between align-items-center'}>
                                <CustomLogo/>
                            </div>
                            <div className={`col-lg-9 col-md-9 d-flex justify-content-between ${classes.mainMenu}`}>
                                <div
                                    className={' col d-flex align-items-center justify-content-center mx-2'}>
                                    <div
                                        className={`d-flex flex-row justify-content-center align-items-center `}>
                                        <nav className={'d-none nav navbar navbar-nav mt-1 d-lg-block '}>
                                            <ul id={'navigation'} className={`m-0 p-0`}>
                                                <li className={'d-inline-block position-relative z-1 '}><a
                                                    href=""
                                                    className={'p-3 nav-link text-decoration-none fs-6 fw-bold'}>Home</a>
                                                </li>
                                                <li className={'d-inline-block position-relative z-1 '}><a
                                                    href=""
                                                    className={'p-3 text-decoration-none nav-link fs-6 fw-bold'}>Find a
                                                    Jobs</a>
                                                </li>
                                                <li className={'d-inline-block position-relative z-1  '}><a
                                                    href=""
                                                    className={'p-3 text-decoration-none nav-link fw-bolder fs-6'}>Page</a>
                                                    <ul className={`${classes.submenu} bg-body position-absolute mt-4 p-0`}>
                                                        <li>
                                                            <a href=""
                                                               className={'text-decoration-none nav-link  fw-bolder fs-6 '}>Blog</a>
                                                        </li>
                                                        <li>
                                                            <a href=""
                                                               className={'text-decoration-none nav-link fw-bolder fs-6'}>Blog
                                                                Details</a>
                                                        </li>
                                                        <li>
                                                            <a href=""
                                                               className={'text-decoration-none nav-link  fw-bolder fs-6'}>Elements</a>
                                                        </li>
                                                        <li>
                                                            <a href=""
                                                               className={'text-decoration-none nav-link  fs-6 fw-bolder'}>Job
                                                                Details</a>
                                                        </li>
                                                    </ul>
                                                </li>

                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className={'d-none d-lg-inline-flex'}>
                                    <button className={`btn btn-pink my-2 mx-1 d-inline-block`}
                                            onClick={registerClickHandle}>Register
                                    </button>
                                    <button className={`btn btn-white my-2 d-inline-block`}
                                            onClick={() => navigate('/auth/login')}>Login
                                    </button>
                                </div>
                                {/* begin::Theme mode */}
                                <div
                                    className={'d-flex d-none d-lg-inline-flex form-check form-switch flex-column  justify-content-center align-items-center mx-3'}>
                                    <input className={'row form-check-input'} type={'checkbox'} checked={null}
                                           onChange={ctx.setTheme}/>
                                    <label className={'label'}
                                           htmlFor="">{ctx.theme === 'light' ? "Light Mode" : "Dark Mode"}</label>
                                </div>
                                {/* end::Theme mode */}
                            </div>

                            {/*mobile menu*/}
                            <div
                                className={`col-3  mx-sm-3 d-block justify-content-end w-100 position-absolute my-5 d-lg-none ${classes.mobileMenu}`}>
                                <nav className=" navbar bg-transparent">
                                    <div className="container-fluid justify-content-end">
                                        <button
                                            className="navbar-toggler "
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#navbarToggleExternalContent1"
                                            aria-controls="navbarToggleExternalContent1"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                                                    fill="currentColor"/>
                                                <path opacity="0.3"
                                                      d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                                                      fill="currentColor"/>
                                            </svg>
                                        </button>
                                    </div>
                                </nav>
                                <div className="collapse" id="navbarToggleExternalContent1">
                                    <ul className="bg-body d-flex justify-content-start navbar-nav mx-3 d-flex flex-column list-unstyled shadow-3 py-2 px-3">
                                        <li className="btn mx-3 text-decoration-none btn-link btn-block m-0 p-2 text-start text-dark">
                                            <a
                                                href="" className={`text-decoration-none fs-6 fw-bolder nav-link`}>Home</a></li>
                                        <li className="btn  mx-3 btn-link btn-block text-decoration-none m-0 p-2 text-start text-dark">
                                            <a
                                                href="" className={`text-decoration-none nav-link text-nowrap fs-6 fw-bolder`}>Find
                                                a job</a>
                                        </li>
                                        <li className="btn  mx-3 btn-link btn-block text-decoration-none m-0 p-2 text-start text-dark">
                                            <a href="" className={`text-decoration-none nav-link fs-6 fw-bolder`}>About</a></li>
                                        <li className="btn btn-link btn-block  mx-3 text-decoration-none m-0 p-2 text-start text-dark d-flex justify-content-between align-items-center">
                                            <a href="" className={`text-decoration-none nav-link fs-6 fw-bolder`}>Page</a>
                                            <span className={'fs-4  fw-bolder btn'}
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#navbarToggleExternalContent2"
                                                  aria-controls="navbarToggleExternalContent2"
                                                  aria-expanded="false"
                                                  aria-label="Toggle navigation">
                                                +</span>
                                        </li>
                                        <div className={'collapse'} id="navbarToggleExternalContent2">
                                            <ul className=" bg-body  mx-3 d-flex flex-column list-unstyled shadow-3 py-2 px-3">
                                                <li className="btn   mx-3 text-decoration-none btn-link btn-block m-0 p-2 text-start text-dark">
                                                    <a href=""
                                                       className={`text-decoration-none nav-link text-nowrap fs-6 fw-bolder`}>Blog</a>
                                                </li>
                                                <li className="btn mx-3 text-decoration-none btn-link btn-block m-0 p-2 text-start text-dark">
                                                    <a href=""
                                                       className={`text-decoration-none nav-link text-nowrap fs-6 fw-bolder`}>Blog
                                                        Details</a></li>
                                                <li className="btn mx-3 text-decoration-none btn-link btn-block m-0 p-2 text-start text-dark">
                                                    <a href=""
                                                       className={`text-decoration-none nav-link text-nowrap fs-6 fw-bolder`}>Blog
                                                        Elements</a></li>
                                                <li className="btn mx-3 text-decoration-none  btn-link btn-block m-0 p-2 text-start text-dark">
                                                    <a href=""
                                                       className={`text-decoration-none nav-link text-nowrap fs-6 fw-bolder`}>Job
                                                        Details</a></li>
                                            </ul>
                                        </div>
                                        <div className={'d-flex justify-content-between align-items-center '}>
                                            <div className={' d-inline-flex'}>
                                                <button className={`btn btn-pink my-2 mx-1 col-6 d-inline-block`}
                                                        onClick={registerClickHandle}>Register
                                                </button>
                                                <button className={`btn btn-white col-6 my-2 d-inline-block`}
                                                        onClick={() => navigate('/auth/login')}>Login
                                                </button>
                                            </div>
                                            {/* end::Theme mode */}
                                            <div
                                                className={'d-flex form-check form-switch flex-row  justify-content-start align-items-center mx-3'}>
                                                <input className={'row form-check-input '} type={'checkbox'}
                                                       checked={null}
                                                       onChange={ctx.setTheme}/>
                                                <label className={'label mx-4'}
                                                       htmlFor="">{ctx.theme === 'light' ? "Light Mode" : "Dark Mode"}</label>
                                            </div>
                                            {/* end::Theme mode */}
                                        </div>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}