import React, {useState} from "react";
import {Button} from "../../../shared/components/form/Button";
import {useAuth} from "../../../modules/auth";
import AuthService from "../../../shared/services/api-client/auth.service";
import {UserInfoSettings} from "./UserInfoSettings";
import {Role} from "../../../shared/enums/roles.enum";
import {CompanyInfoSettings} from "./CompanyInfoSettings";
import CustomModal from "../../../shared/components/CustomModal";

const authService = new AuthService();

export const ProfileSettings = () => {
    const {currentUser} = useAuth()
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalBody, setModalBody] = useState("");

    const hideModal = () => {
        setShowModal(false);
    }
    const openModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <UserInfoSettings/>
            {currentUser.role === Role.employer && <CompanyInfoSettings/>}
            {!currentUser.isEmailVerified &&
                <div className="mx-auto shadow-lg rounded overflow-hidden bg-body p-4 my-3 d-flex justify-content-between align-items-center flex-wrap">
                    <p className="fw-bold text-label fs-4 mb-0">Verify your email</p>
                    <Button type="button"
                            onClick={async () => {
                                setError(null)
                                try {
                                    await authService.sendVerificationEmail();
                                    setModalBody("Verification email is sent. You can now check your inbox")
                                    openModal()
                                } catch (error) {
                                    console.log(error)
                                    setError("Error while sending verification email")
                                    setModalBody("There was an error. Verification email was not sent. Please try again")
                                }
                            }}
                    >Send verification email</Button>
                </div>}
            <CustomModal title={error ? 'Error' : 'Success'} show={showModal} onHide={hideModal} footer={<Button state="success" onClick={hideModal}>Continue</Button>}>
                {modalBody}
            </CustomModal>
        </>
    )
}