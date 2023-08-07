import React, {useState} from "react";
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {UserModel} from "../../shared/models/user.model";
import {deleteUser, updateUser} from "../../shared/services/user.service";
import CustomModal from "../../shared/components/CustomModal";
import {Role} from "../../shared/enums/roles.enum";
import {Button} from "../../shared/components/form/Button";
import {Select} from "../../shared/components/form/Select";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import {getEmployers, deleteEmployer} from "../../shared/services/employer.service";

type UserItemProps = {
    user: UserModel;
    updateUsers: () => void;
}

const editUserSchema = Yup.object().shape({
    role: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Role is required'),
})

export const UserItem: React.FC<UserItemProps> = (props) => {
    const {
        user,
        updateUsers,
    } = props

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showActivationModal, setShowActivationModal] = useState(false);
    const [loading, setLoading] = useState(false)

    const initialValues = {
        role: user.role || '',
    }

    const formik = useFormik({
        initialValues,
        validationSchema: editUserSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoading(true)
            try {
                await confirmChangesToUser(values);
            } catch (error) {
                setStatus('User detail is invalid')
                setSubmitting(false)
            }
            setLoading(false)
        },
    })

    const confirmRemovingUser = async () => {
        setLoading(true)
        try {
            // if(user.role === Role.employer) {
            //     const employer = await getEmployers(`${user.id}`);
            //     console.log(employer)
            //     if(employer) {
            //         await deleteEmployer(employer.id)
            //     }
            // }
            await deleteUser(`${user.id}`);
            updateUsers();
            hideDeleteModal()
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

    const confirmChangesToUser = async (updatedUser) => {
        setLoading(true)
        try {
            await updateUser(`${user.id}`, updatedUser)
            updateUsers();
            hideEditModal()
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    };
    const hideEditModal = () => {
        setShowEditModal(false);
    }
    const openEditModal = () => {
        setShowEditModal(true);
    };

    const confirmUserActivation = async () => {
        setLoading(true)
        try {
            await updateUser(`${user.id}`, {active: !user.active});
            updateUsers();
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

    return (
        <tr className="fw-semibold text-gray-800 align-middle">
            <td>{user.name}</td>
            <td>{user.role}</td>
            {user.active ?
                <td><span className="badge badge-light-success">active</span></td> :
                <td><span className="badge badge-light-danger">not active</span></td> }
            <td>
                <DropdownButton
                    id={`dropdown-button-drop`}
                    size="sm"
                    variant="secondary"
                    title="Actions"
                >
                    <Dropdown.Item onClick={openEditModal}>change role</Dropdown.Item>
                    <Dropdown.Item onClick={openDeleteModal}>delete</Dropdown.Item>
                    <Dropdown.Item onClick={openActivationModal}>{user.active ? 'deactivate' : 'activate'}</Dropdown.Item>
                </DropdownButton>
            </td>
            <CustomModal
                show={showDeleteModal}
                onHide={hideDeleteModal}
                footer={
                    <div className="d-flex flex-row">
                        <Button type="button" onClick={confirmRemovingUser} state="success">Delete</Button>
                        <Button type="button" onClick={hideDeleteModal} state="danger">Cancel</Button>
                    </div>
                }
            >
                Are you sure you want to delete {user.name}?
            </CustomModal>
            <CustomModal title="Edit user" show={showEditModal} onHide={hideEditModal}>
                <form
                    className={`form w-100 my-4 p-4`}
                    onSubmit={formik.handleSubmit}
                    noValidate
                    id='kt_edit_profile_form'
                >
                    <Select
                        label="Role"
                        formikFieldProps={formik.getFieldProps('role')}
                        formikTouched={formik.touched.role}
                        formikError={formik.errors.role}
                        name="role"
                        id="role"
                        required={true}
                        requiredStar={true}
                        options={Object.entries(Role).map(([key, value]) => ({value: key, label: value,}))}
                    />

                    <div className='text-center mt-4 d-grid'>
                        <Button
                            state="success"
                            type="submit"
                            id='kt_edit_profile_submit'
                            disabled={formik.isSubmitting || !formik.isValid}
                            loading={loading}
                        >Continue</Button>
                    </div>
                </form>
            </CustomModal>
            <CustomModal
                show={showActivationModal}
                onHide={hideActivationModal}
                footer={
                <div className="d-flex flex-row">
                    <Button type="button" onClick={confirmUserActivation} state="success">{user.active ? 'Deactivate account' : 'Activate account'}</Button>
                    <Button type="button" onClick={hideActivationModal} state="danger">Cancel</Button>
                </div>
                }
            >
                Are you sure you want to {user.active ? 'deactivate' : 'activate'} {user.name}'s account?
            </CustomModal>
        </tr>
    )
}