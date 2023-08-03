import React from "react";
import {useAuth} from "../../modules/auth";
import {useNavigate} from "react-router-dom";

export function HeaderButtons(props) {
    const navigate = useNavigate();
    const {currentUser, logout} = useAuth();
    return <>
        {currentUser ? (
            <div className={` ${props.className}`}>
                <button className={`btn btn-pink col-6 my-2 mx-1 d-inline-block`}
                        onClick={() => navigate('/profile')}>My profile
                </button>
                <button className={`btn btn-white my-2 col-6 d-inline-block`}
                        onClick={logout}>Logout
                </button>
            </div>
        ) : (
            <div className={`${props.className}`}>
                <button className={`btn btn-pink col-6 my-2 mx-1 d-inline-block`}
                        onClick={() => navigate('/auth/registration')}>Register
                </button>
                <button className={`btn btn-white my-2 col-6 d-inline-block`}
                        onClick={() => navigate('/auth/login')}>Login
                </button>
            </div>
        )}
    </>
}