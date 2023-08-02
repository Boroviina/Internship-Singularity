import React, {useContext} from "react";
import classes from "./Header.module.css";
import {useNavigate} from "react-router-dom";
import ThemeContext from "../../theme-context/ThemeContext";
import {useAuth} from "../../modules/auth";
import {MenuItem} from "./MenuItem";
import {HeaderButtons} from "./HeaderButtons";
import {ThemeToggleButton} from "./ThemeToggleButton";
import {MenuToggleButton} from "./MenuToggleButton";

export function MobileHeader() {
    const ctx = useContext(ThemeContext);
    const {currentUser} = useAuth();
    return <div
        className={`col-3  mx-sm-3 d-block justify-content-end w-100 position-absolute my-5 d-lg-none ${classes.mobileMenu}`}>
        <nav className=" navbar bg-transparent">
            <div className="container-fluid justify-content-end">
                <MenuToggleButton id={'navbarToggleExternalContent1'}/>
            </div>
        </nav>
        <div className="collapse" id="navbarToggleExternalContent1">
            <ul className="bg-body d-flex justify-content-start navbar-nav mx-3 d-flex flex-column list-unstyled shadow-3 py-2 px-3">
                <MenuItem title={'Home'} reference={'/home'}/>
                {currentUser ? (<MenuItem reference={'/find-job'} title={'Find a Job'}/>) : (
                    <MenuItem reference={'/auth/login'} title={'Find a Job'}/>)}
                <li className="btn btn-link btn-block  mx-3 text-decoration-none m-0 p-2 text-start text-dark d-flex justify-content-between align-items-center">
                    <a href=""
                       className={`text-decoration-none nav-link fs-6 fw-bolder`}>Page</a>
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
                        <MenuItem title={'Blog'} reference={''}/>
                        <MenuItem title={'Blog Details'} reference={''}/>
                        <MenuItem title={'Blog elements'} reference={''}/>
                        <MenuItem title={'Job Details'} reference={''}/>
                    </ul>
                </div>
                <div className={'d-flex justify-content-between align-items-center '}>
                    <HeaderButtons className={'d-flex flex-row '}/>
                    {/* end::Theme mode */}
                   <ThemeToggleButton ctx={ctx} className={'flex-row justify-content-start'}/>
                    {/* end::Theme mode */}
                </div>
            </ul>
        </div>
    </div>
}