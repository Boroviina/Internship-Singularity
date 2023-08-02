import React, {useContext} from "react";
import classes from './Header.module.css';
import {CustomLogo} from "./CustomLogo";
import {useNavigate} from "react-router-dom";
import ThemeContext from "../../theme-context/ThemeContext";
import {useAuth} from "../../modules/auth";
import {MobileHeader} from "./MobileHeader";
import {HeaderButtons} from "./HeaderButtons";
import {ThemeToggleButton} from "./ThemeToggleButton";
import {MenuItem} from "./MenuItem";

export function Header() {
    const ctx = useContext(ThemeContext);
    const {currentUser} = useAuth()
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
                                                <MenuItem reference={'home'} title={'Home'}/>
                                                {currentUser ? (
                                                    <MenuItem reference={'/find-job'} title={'Find a Job'}/>) : (
                                                    <MenuItem reference={'/auth/login'} title={'Find a Job'}/>)}
                                                <li className={'d-inline-block position-relative z-1  '}><a
                                                    href=""
                                                    className={'p-3 text-decoration-none nav-link fw-bolder fs-6'}>Page</a>
                                                    <ul className={`${classes.submenu} bg-body position-absolute mt-4 p-0`}>
                                                       <MenuItem title={'Blog'} reference={''}/>
                                                       <MenuItem title={'Elements'} reference={''}/>
                                                       <MenuItem title={'Job Details'} reference={''}/>
                                                    </ul>
                                                </li>

                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                <HeaderButtons className={'d-none d-lg-inline-flex col-3'}/>
                                {/* begin::Theme mode */}
                                <ThemeToggleButton ctx={ctx}
                                                   className={'d-none d-lg-inline-flex flex-column justify-content-center '}/>
                                {/* end::Theme mode */}
                                <MobileHeader/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}