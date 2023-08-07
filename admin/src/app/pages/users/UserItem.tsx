import React, {useState} from "react";
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from "clsx";
import {UserModel} from "../../shared/models/user.model";
import {deleteUser, updateUser} from "../../shared/services/user.service";
import CustomModal from "../../shared/components/CustomModal";
import {Input} from "../../shared/components/form/Input";
import {Role} from "../../shared/enums/roles.enum";
import {Button} from "../../shared/components/form/Button";


type UserItemProps = {
    user: UserModel;
    updateUserRole: (userId: string, newRole: string) => void;
    updateUserActive: (userId: string, newActive: boolean) => void;
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
        updateUserRole,
        updateUserActive
    } = props

    const [showModal, setShowModal] = useState(false);
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
                confirmChangesToUser(values);
                // hideModal()
            } catch (error) {
                setStatus('User detail is invalid')
                setSubmitting(false)
            }
            setLoading(false)
        },
    })

    const removeUser = async () => {
        openModal()
    };
    const confirmRemovingUser = async () => {
        await deleteUser(`${user.id}`);
        hideModal()
    };
    const hideModal = () => {
        setShowModal(false);
    }
    const openModal = () => {
        setShowModal(true);
    };

    const editUser = async () => {
        openEditModal()
    };
    const confirmChangesToUser = async (updatedUser) => {
        await updateUser(`${user.id}`, updatedUser)
        updateUserRole(`${user.id}`, updatedUser.role);
        hideEditModal()
    };
    const hideEditModal = () => {
        setShowEditModal(false);
    }
    const openEditModal = () => {
        setShowEditModal(true);
    };

    const activateDeactivateUser = async () => {
        openActivationModal()
    };
    const confirmUserActivation = async () => {
        await updateUser(`${user.id}`, {active: !user.active})
        updateUserActive(`${user.id}`, !user.active);
        hideActivationModal()
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
                <button onClick={editUser} className="btn btn-active-light-primary">change role</button>
                <button onClick={removeUser} className="btn btn-active-light-primary">delete</button>
                {user.active ?
                    <button onClick={activateDeactivateUser} className="btn btn-active-light-danger">deactivate</button> :
                    <button onClick={activateDeactivateUser} className="btn btn-active-light-success">activate</button>}
            </td>
            <CustomModal
                title="title"
                show={showModal}
                onHide={hideModal}
                buttonFooter={true}
                buttonFooterText="Yes"
                onClickButtonFooter={confirmRemovingUser}
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
                    <div className='fv-row mb-3'>
                        <label htmlFor="role" className="form-label fs-6 fw-bolder text-label">Role<span className="text-danger">*</span></label>
                        <select
                            {...formik.getFieldProps('role')}
                            className={clsx(
                                `form-control form-control-solid mb-3 `,
                                {'is-invalid': formik.touched.role && formik.errors.role},
                                {'is-valid': formik.touched.role && !formik.errors.role}
                            )}
                            name="role" id="role">
                            <option value=""></option>
                            {Object.entries(Role).map(([key, value]) => (
                                <option key={key} value={key}>{value}</option>
                            ))}
                        </select>
                    </div>

                    <div className='text-center mt-4'>
                        <Button
                            type="submit"
                            id='kt_edit_profile_submit'
                            disabled={formik.isSubmitting || !formik.isValid}
                            loading={loading}
                        >Continue</Button>
                    </div>
                </form>
            </CustomModal>
            <CustomModal
                title="title"
                show={showActivationModal}
                onHide={hideActivationModal}
                buttonFooter={true}
                buttonFooterText="Yes"
                onClickButtonFooter={confirmUserActivation}
            >
                Are you sure you want to {user.active ? 'deactivate' : 'activate'} {user.name}'s account?
            </CustomModal>
        </tr>
    )
}