import React, {FC, useState} from 'react'
import {Button} from "../../shared/components/form/Button";
import {useAuth} from "../auth";
import {useNavigate, useSearchParams} from "react-router-dom";
import AuthService from "../../shared/services/api-client/auth.service";
import CustomInfoModal from "../../shared/components/CustomInfoModal";

const authService = new AuthService();

const VerifyEmail: FC = () => {
    const {currentUser} = useAuth();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [showModal, setShowModal] = useState(false);

    const hideModal = () => {
        setShowModal(false);
        navigate('/profile');
    }
    const openModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
                <div className="fs-1 text-center">Verify your email address</div>
                <h2 className="fs-2 text-center">Last step. If you want to verify your email click button below</h2>
                <h3 className="fs-3 fw-bolder mb-3">{currentUser.email}</h3>
                <div>
                    <Button type="button" onClick={async () => {
                        try {
                            await authService.verifyEmail(token);
                            openModal();
                        } catch (error) {
                            console.log(error);
                        }
                    }}>Verify email</Button>{' '}
                    <Button type="button" filled={true} onClick={() => navigate('/home')}>Cancel</Button>
                </div>
            </div>
            <CustomInfoModal title="Success" show={showModal} onHide={hideModal}>
                Email verification was successful. Your email {currentUser.email} is now verified.
            </CustomInfoModal>
        </>
    )
}

export {VerifyEmail}
