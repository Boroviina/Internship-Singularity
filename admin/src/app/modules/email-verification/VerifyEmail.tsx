import React, {FC, useState} from 'react'
import {Button} from "../../shared/components/form/Button";
import {useAuth} from "../auth";
import {useNavigate, useSearchParams} from "react-router-dom";
import AuthService from "../../shared/services/api-client/auth.service";
import CustomModal from "../../shared/components/CustomModal";

const authService = new AuthService();

const VerifyEmail: FC = () => {
    const {currentUser, setCurrentUser} = useAuth();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [showModal, setShowModal] = useState(false);
    const [modalBody, setModalBody] = useState("");
    const [error, setError] = useState(null);

    const hideModal = () => {
        setShowModal(false);
    }
    const hideModalAndGoToProfile = () => {
        setShowModal(false);
        navigate(`/users/${currentUser.id}`);
    }
    const openModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
                <div className="fs-1 text-center text-muted">Verify your email address</div>
                <h2 className="fs-2 text-center text-muted">Last step. If you want to verify your email click button below</h2>
                <h3 className="fs-3 fw-bolder mb-5">{currentUser.email}</h3>

                <div className="text-center">
                    <Button
                        state="success"
                        onClick={async () => {
                            setError(null);
                            try {
                                await authService.verifyEmail(token);
                                currentUser.isEmailVerified = true;
                                setCurrentUser(currentUser);
                                setModalBody(`Email verification was successful. Your email ${currentUser.email} is now verified.`);
                            } catch (error) {
                                setError(error)
                                setModalBody("Email verification failed. Please, try again later.")
                                console.log(error);
                            }
                            openModal();
                        }}>Verify email</Button>{' '}
                    <Button onClick={() => navigate('/')}>Cancel</Button>
                </div>
            </div>
            <CustomModal title={error ? "Error" : "Success"} show={showModal} onHide={error ? hideModal : hideModalAndGoToProfile}
                footer={<Button onClick={error ? hideModal : hideModalAndGoToProfile}>Continue</Button>}
            >
                {modalBody}
            </CustomModal>
        </>
    )
}

export {VerifyEmail}
