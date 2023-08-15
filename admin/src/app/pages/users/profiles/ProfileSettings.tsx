import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "../../../shared/components/form/Button";
import {useAuth} from "../../../modules/auth";
import AuthService from "../../../shared/services/api-client/auth.service";
import {getEmployers} from "../../../shared/services/employer.service";
import {Employer} from "../../../shared/models/employer.model";
import {UserInfoSettings} from "./UserInfoSettings";
import {Role} from "../../../shared/enums/roles.enum";
import {CompanyInfoSettings} from "./CompanyInfoSettings";
import CustomModal from "../../../shared/components/CustomModal";

const authService = new AuthService();

export const ProfileSettings = () => {
    const {currentUser, setCurrentUser} = useAuth()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalBody, setModalBody] = useState("");
    const [employer, setEmployer] = useState<Employer>(null);

    const fetchEmployer = async () => {
        try {
            const employers = await getEmployers(`${currentUser.id}`);
            if (employers[0]) {
                setEmployer(employers[0]);
            } else {
                throw new Error("This employer does not exist");
            }
        } catch (error) {
            console.log(error);
            navigate("/error/404");
        }
    };

    useEffect(() => {
        if(currentUser.role === Role.employer) {
            fetchEmployer();
        }
    }, []);

    const hideModal = () => {
        setShowModal(false);
        // navigate('/profile')
    }
    const openModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <UserInfoSettings/>
            {currentUser.role === Role.employer && <CompanyInfoSettings/>}
                {!currentUser.isEmailVerified && <div
                    className="mx-auto shadow overflow-hidden card-bg p-4 my-3 d-flex justify-content-between align-items-center flex-wrap">
                    <p className="fw-bold text-label fs-4 mb-0">Verify your email</p>
                    <Button type="button"
                            onClick={async () => {
                                try {
                                    await authService.sendVerificationEmail();
                                    setModalBody("Verification email is sent. You can now check your inbox")
                                    openModal()
                                } catch (error) {
                                    console.log(error)
                                }
                            }}
                    >Send verification email</Button>
                </div>}
            <CustomModal title="Success" show={showModal} onHide={hideModal} footer={<Button state="success" onClick={hideModal}>Continue</Button>}>
                {modalBody}
            </CustomModal>
        </>
    )
}