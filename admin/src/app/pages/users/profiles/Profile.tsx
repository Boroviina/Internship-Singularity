import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {deleteUser, getUser, updateUser} from "../../../shared/services/user.service";
import {Role} from "../../../shared/enums/roles.enum";
import {useAuth} from "../../../modules/auth";
import {deleteEmployer, getEmployers} from "../../../shared/services/employer.service";
import CustomModal from "../../../shared/components/CustomModal";
import {Button} from "../../../shared/components/form/Button";
import {ProfileOverview} from "./ProfileOverview";
import {EmployerDetails} from "./EmployerDetails";
import {EmployerJobListingHistory} from "./EmployerJobListingHistory";

export const Profile = () => {
    const [user, setUser] = useState(null);
    const [employer, setEmployer] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showActivationModal, setShowActivationModal] = useState(false);
    const {userId} = useParams();
    const navigate = useNavigate();
    const {currentUser} = useAuth();

    const fetchUser = async () => {
        try {
            const result = await getUser(userId);
            if(result) {
                setUser(result);
                if(result.role === Role.employer) {
                    fetchEmployer()
                }
            } else {
                throw new Error("This user does not exist")
            }
        } catch(error) {
            console.log(error);
            navigate('/error/404')
        }
    }

    const fetchEmployer = async () => {
        try {
            const employer = await getEmployers(userId);
            if(employer[0]) {
                setEmployer(employer[0])
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUser()
    }, []);

    const confirmRemovingUser = async () => {
        setLoading(true)
        try {
            if(user.role === Role.employer) {
                const employer = await getEmployers(`${user.id}`);
                if(employer[0]) {
                    await deleteEmployer(employer[0].id)
                }
            }
            await deleteUser(`${user.id}`);
            hideDeleteModal()
            navigate('/users');
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    };
    const hideDeleteModal = () => {
        setShowDeleteModal(false);
    }
    const openDeleteModal = () => {
        setShowDeleteModal(true);
    };


    const confirmUserActivation = async () => {
        setLoading(true)
        try {
            await updateUser(`${user.id}`, {active: !user.active});
            fetchUser();
            hideActivationModal()
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    };
    const hideActivationModal = () => {
        setShowActivationModal(false);
    }
    const openActivationModal = () => {
        setShowActivationModal(true);
    };

    let content = <div>...</div>
    if(user) {
        content = <>
            <div className="mx-auto shadow-lg rounded overflow-hidden pt-3 mb-3 border bg-body">
                <div className="d-flex flex-wrap align-items-center align-content-between p-4">
                    <div className="d-flex flex-wrap items-center">
                        <div>
                            <p className="fw-bold text-label fs-5 mb-0">{user.name} {user.active ?
                                <span className="badge badge-light-success">approved</span> :
                                <span className="badge badge-light-danger">pending</span>}</p>
                            <p className="text-label">{user.email}</p>
                        </div>
                    </div>
                    {user.id === currentUser.id && <div className="ms-auto">
                        <Button type="button" onClick={() => navigate('/profile/settings')}>Settings</Button>
                    </div>}
                </div>
                {currentUser.role === Role.admin && currentUser.id !== user.id && <div className="row border-top">
                    <div onClick={openActivationModal}
                         className="d-flex flex-wrap align-items-center justify-content-center col-6 p-2 fs-6 border-end cursor-pointer">
                        {user.active ?
                            <>
                                <span className="d-none d-sm-inline-block text-danger">Deactivate</span>
                                <i className="bi bi-person-dash-fill d-inline-block d-sm-none text-danger"></i>
                            </> :
                            <>
                                <span className="d-none d-sm-inline-block text-success">Activate</span>
                                <i className="bi bi-person-check-fill d-inline-block d-sm-none text-success"></i>
                            </>
                        }
                    </div>
                    <div onClick={openDeleteModal}
                         className="d-flex flex-wrap align-items-center justify-content-center col-6 p-2 fs-6 cursor-pointer">
                        <span className="d-none d-sm-inline-block text-danger">Delete</span>
                        <i className="bi bi-trash3-fill d-inline-block d-sm-none text-danger"></i>
                    </div>
                </div>}
            </div>
            <ProfileOverview user={user}/>
            {user.role === Role.employer && <EmployerDetails employer={employer} userName={user.name}/>}
            {user.role === Role.employer && employer && <EmployerJobListingHistory employer={employer}/>}
            <CustomModal
                show={showDeleteModal}
                onHide={hideDeleteModal}
                footer={
                    <div className="d-flex flex-row">
                        <Button type="button" onClick={confirmRemovingUser} state="success">Delete</Button>
                        <Button type="button" onClick={hideDeleteModal} state="danger">Cancel</Button>
                    </div>
                }
            >Are you sure you want to delete {user.name}?</CustomModal>
            <CustomModal
                show={showActivationModal}
                onHide={hideActivationModal}
                footer={
                    <div className="d-flex flex-row">
                        <Button type="button" onClick={confirmUserActivation} state="success">{user.active ? 'Deactivate account' : 'Activate account'}</Button>
                        <Button type="button" onClick={hideActivationModal} state="danger">Cancel</Button>
                    </div>
                }
            >Are you sure you want to {user.active ? 'deactivate' : 'activate'} {user.name}'s account?</CustomModal>
        </>
    }

    return (
        <>
            {content}
        </>
    );
}