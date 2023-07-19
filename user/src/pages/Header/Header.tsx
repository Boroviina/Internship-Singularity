import React, {useState} from "react";
import classes from './Header.module.css';
import {CustomLogo} from "./CustomLogo";

export function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const showMenuHandler = () => {
        if (!showMenu)
            setShowMenu(true);
        else
            setShowMenu(false);

    }
    const showSubmenuHandler = () => {
        if (!showSubmenu)
            setShowSubmenu(true);
        else
            setShowSubmenu(false);

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
                            <div className={'col-lg-9 col-md-9 d-flex justify-content-between .'}>
                                <div
                                    className={'menu-wrapper col d-flex align-items-center justify-content-center mx-2'}>
                                    <div
                                        className={`d-flex flex-row justify-content-center align-items-center ${classes.mainMenu}`}>
                                        <nav className={'d-none mt-1 d-lg-block '}>
                                            <ul id={'navigation'} className={`m-0 p-0`}>
                                                <li className={'d-inline-block position-relative z-1 '}><a
                                                    href="" className={'p-3 text-decoration-none fs-6 fw-bolder'}>Home</a>
                                                </li>
                                                <li className={'d-inline-block position-relative z-1 '}><a
                                                    href="" className={'p-3 text-decoration-none fs-6 fw-bolder'}>Find a
                                                    Jobs</a>
                                                </li>
                                                <li className={'d-inline-block position-relative z-1  '}><a
                                                    href="" className={'p-3 text-decoration-none fs-6 fw-bolder'}>About</a>
                                                </li>
                                                <li className={'d-inline-block position-relative z-1  '}><a
                                                    href="" className={'p-3 text-decoration-none fw-bolder fs-6'}>Page</a>
                                                    <ul className={`${classes.submenu} position-absolute mt-4 p-0`}>
                                                        <li>
                                                            <a href=""
                                                               className={'text-decoration-none fw-bolder fs-6 '}>Blog</a>
                                                        </li>
                                                        <li>
                                                            <a href="" className={'text-decoration-none fw-bolder fs-6'}>Blog
                                                                Details</a>
                                                        </li>
                                                        <li>
                                                            <a href=""
                                                               className={'text-decoration-none fw-bolder fs-6'}>Elements</a>
                                                        </li>
                                                        <li>
                                                            <a href="" className={'text-decoration-none fs-6 fw-bolder'}>Job
                                                                Details</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className={'d-inline-block position-relative z-1 '}><a
                                                    href="" className={'p-3 text-decoration-none fw-bolder fs-6'}>Contact</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className={'d-none d-lg-inline-flex'}>
                                    <button className={`${classes.btn1}  d-inline-block`}>Register</button>
                                    <button className={`${classes.btn2}  d-inline-block`}>Login</button>
                                </div>
                            </div>

                            {/*mobile menu*/}
                            <div
                                className={`col-3 mx-sm-3 d-block justify-content-end w-100 position-absolute my-5 d-lg-none ${classes.mobileMenu}`}>
                                <nav className="navbar navbar-light bg-transparent">
                                    <div className="container-fluid justify-content-end">
                                        <button
                                            className="navbar-toggler btn"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#navbarToggleExternalContent1"
                                            aria-controls="navbarToggleExternalContent1"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation"
                                            onClick={showMenuHandler}
                                        >
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
                                {showMenu && <div className="" id="navbarToggleExternalContent1">
                                    <ul className="bg-light mx-3 d-flex flex-column list-unstyled shadow-3 py-2 px-3">
                                        <li className="btn mx-3 text-decoration-none btn-link btn-block m-0 p-2 text-start text-dark">
                                            <a
                                                href="" className={`text-decoration-none fs-6 fw-bolder`}>Home</a></li>
                                        <li className="btn  mx-3 btn-link btn-block text-decoration-none m-0 p-2 text-start text-dark">
                                            <a
                                                href="" className={`text-decoration-none text-nowrap fs-6 fw-bolder`}>Find
                                                a job</a>
                                        </li>
                                        <li className="btn  mx-3 btn-link btn-block text-decoration-none m-0 p-2 text-start text-dark">
                                            <a href="" className={`text-decoration-none fs-6 fw-bolder`}>About</a></li>
                                        <li onClick={showSubmenuHandler}
                                            className="btn btn-link btn-block  mx-3 text-decoration-none m-0 p-2 text-start text-dark d-flex justify-content-between align-items-center">
                                            <a href="" className={`text-decoration-none fs-6 fw-bolder`}>Page</a>
                                            <span className={'fs-4 fw-bolder'}>+</span>
                                        </li>
                                        {showSubmenu &&
                                            <ul className="bg-light mx-3 d-flex flex-column list-unstyled shadow-3 py-2 px-3">
                                                <li className="btn mx-3 text-decoration-none btn-link btn-block m-0 p-2 text-start text-dark">
                                                    <a href=""
                                                       className={`text-decoration-none text-nowrap fs-6 fw-bolder`}>Blog</a>
                                                </li>
                                                <li className="btn mx-3 text-decoration-none btn-link btn-block m-0 p-2 text-start text-dark">
                                                    <a href=""
                                                       className={`text-decoration-none text-nowrap fs-6 fw-bolder`}>Blog
                                                        Details</a></li>
                                                <li className="btn mx-3 text-decoration-none btn-link btn-block m-0 p-2 text-start text-dark">
                                                    <a href=""
                                                       className={`text-decoration-none text-nowrap fs-6 fw-bolder`}>Blog
                                                        Elements</a></li>
                                                <li className="btn mx-3 text-decoration-none btn-link btn-block m-0 p-2 text-start text-dark">
                                                    <a href=""
                                                       className={`text-decoration-none text-nowrap fs-6 fw-bolder`}>Job
                                                        Details</a></li>
                                            </ul>
                                        }
                                        <li className="btn btn-link  mx-3 btn-block text-decoration-none m-0 p-2 text-start text-dark">
                                            <a href="" className={`text-decoration-none fs-6 fw-bolder`}>Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}