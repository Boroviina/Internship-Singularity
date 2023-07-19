import React, {useState} from "react";
import classes from './Header.module.css';

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
                                <div className={'col-3  col-md-2 col-sm-2'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70px" height="70px"
                                         viewBox="0 0 30 30" version="1.1">
                                        <g id="surface1">
                                            <path className={"stroke fill-rule:nonzero fill:#00A8C6 fill-opacity:1 "}
                                                  d="M 8.304688 9.671875 C 8.394531 10.332031 8.460938 11.460938 8.460938 12.34375 L 8.460938 13.320312 L 10.800781 13.320312 L 10.800781 12.335938 C 10.800781 11.425781 10.878906 10.0625 10.949219 9.613281 L 10.984375 9.421875 L 8.273438 9.421875 Z M 8.304688 9.671875 "/>
                                            <path
                                                className={" stroke:none fill-rule:nonzero fill:#00A8C6 fill-opacity:1 "}
                                                d="M 12.203125 9.757812 C 12.289062 10.507812 12.359375 11.824219 12.359375 12.550781 L 12.359375 13.320312 L 14.699219 13.320312 L 14.699219 9.707031 L 15.589844 9.738281 C 16.285156 9.761719 16.546875 9.792969 16.828125 9.894531 C 17.53125 10.144531 18.011719 10.644531 18.226562 11.339844 C 18.304688 11.585938 18.328125 11.886719 18.328125 12.492188 L 18.328125 13.320312 L 20.695312 13.320312 L 20.734375 13.042969 C 20.753906 12.894531 20.761719 12.523438 20.746094 12.214844 C 20.683594 10.996094 19.984375 10.199219 18.628906 9.78125 C 17.765625 9.515625 17.203125 9.46875 14.617188 9.4375 L 12.167969 9.40625 Z M 12.203125 9.757812 "/>
                                            <path
                                                className={" stroke:none fill-rule:nonzero fill:#00A8C6 fill-opacity:1 "}
                                                d="M 8.460938 18.949219 C 8.460938 20.292969 8.429688 21.625 8.398438 21.898438 C 8.292969 22.746094 8.015625 23.171875 7.339844 23.53125 C 7.097656 23.65625 7.019531 23.773438 7.128906 23.839844 C 7.1875 23.878906 8.089844 23.730469 8.496094 23.609375 C 9.402344 23.347656 10.140625 22.789062 10.457031 22.140625 C 10.765625 21.511719 10.800781 21.175781 10.800781 18.730469 L 10.800781 16.5 L 8.460938 16.5 Z M 8.460938 18.949219 "/>
                                            <path
                                                className={" stroke:none fill-rule:nonzero fill:#00A8C6 fill-opacity:1 "}
                                                d="M 12.359375 17.441406 C 12.359375 18.371094 12.28125 19.894531 12.203125 20.472656 L 12.160156 20.761719 L 14.832031 20.761719 L 14.796875 20.472656 C 14.777344 20.316406 14.742188 19.363281 14.722656 18.34375 L 14.6875 16.5 L 12.359375 16.5 Z M 12.359375 17.441406 "/>
                                            <path
                                                className={" stroke:none fill-rule:nonzero fill:#00A8C6 fill-opacity:1 "}
                                                d="M 17.164062 16.871094 C 17.273438 17.082031 17.484375 17.59375 17.640625 18.019531 C 17.796875 18.4375 18.019531 18.929688 18.125 19.117188 C 18.539062 19.800781 19.242188 20.28125 20.171875 20.519531 C 20.644531 20.632812 21.761719 20.761719 22.398438 20.761719 C 22.691406 20.761719 22.738281 20.742188 22.738281 20.644531 C 22.738281 20.550781 22.667969 20.519531 22.339844 20.460938 C 21.457031 20.308594 21.011719 19.890625 20.417969 18.660156 C 19.78125 17.339844 19.636719 17.09375 19.265625 16.691406 L 19.085938 16.5 L 16.980469 16.5 Z M 17.164062 16.871094 "/>
                                        </g>
                                    </svg>
                                </div>
                                <div className={'col-7 col-md-9 col-sm-9'}>
                                    <label className={'col-12 text-nowrap text-start text-dark fs-4 fw-bolder'}
                                           htmlFor="">Job
                                        Radar</label><br/>
                                    <label className={'text-muted text-nowrap fs-6 col-12 fw-bold '} htmlFor="">Get your
                                        dream
                                        job</label>
                                </div>
                            </div>
                            <div className={'col-lg-9 col-md-9 d-flex justify-content-between .'}>
                                <div
                                    className={'menu-wrapper col d-flex align-items-center justify-content-center mx-2'}>
                                    <div
                                        className={`d-flex flex-row justify-content-center align-items-center ${classes.mainMenu}`}>
                                        <nav className={'d-none mt-1 d-lg-block '}>
                                            <ul id={'navigation'} className={`m-0 p-0`}>
                                                <li className={'d-inline-block position-relative z-1 '}><a
                                                    href="" className={'p-3 text-decoration-none fs-5 fw-bolder'}>Home</a>
                                                </li>
                                                <li className={'d-inline-block position-relative z-1 '}><a
                                                    href="" className={'p-3 text-decoration-none fs-5 fw-bolder'}>Find a
                                                    Jobs</a>
                                                </li>
                                                <li className={'d-inline-block position-relative z-1  '}><a
                                                    href="" className={'p-3 text-decoration-none fs-5 fw-bolder'}>About</a>
                                                </li>
                                                <li className={'d-inline-block position-relative z-1  '}><a
                                                    href="" className={'p-3 text-decoration-none fw-bolder fs-5'}>Page</a>
                                                    <ul className={`${classes.submenu} position-absolute mt-4 p-0`}>
                                                        <li>
                                                            <a href=""
                                                               className={'text-decoration-none fw-bolder fs-5 '}>Blog</a>
                                                        </li>
                                                        <li>
                                                            <a href="" className={'text-decoration-none fw-bolder fs-5'}>Blog
                                                                Details</a>
                                                        </li>
                                                        <li>
                                                            <a href=""
                                                               className={'text-decoration-none fw-bolder fs-5'}>Elements</a>
                                                        </li>
                                                        <li>
                                                            <a href="" className={'text-decoration-none fs-5 fw-bolder'}>Job
                                                                Details</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className={'d-inline-block position-relative z-1 '}><a
                                                    href="" className={'p-3 text-decoration-none fw-bolder fs-5'}>Contact</a>
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