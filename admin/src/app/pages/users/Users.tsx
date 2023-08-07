import React, {useEffect, useState} from "react";
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {getUsersWithPages} from "../../shared/services/user.service";
import {UserItem} from "./UserItem";
import CustomModal from "../../shared/components/CustomModal";
import {Input} from "../../shared/components/form/Input";
import {Button} from "../../shared/components/form/Button";
import {Role} from "../../shared/enums/roles.enum";
import {createUser} from "../../shared/services/user.service";
import {Select} from "../../shared/components/form/Select";

const addUserSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Full name is required'),
    email: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
    role: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Role is required'),
})

const initialValues = {
    name: '',
    email: '',
    role: '',
}

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsersWithPages(page);
                const {results, totalPages} = response;
                setUsers(results);
                setTotalPages(totalPages);
            } catch(error) {
                console.log("Error while getting users.");
            }
        }
        fetchUsers();
    }, [page, newUser]);

    const formik = useFormik({
        initialValues,
        validationSchema: addUserSchema,
        onSubmit: async (values, {setStatus, setSubmitting, resetForm}) => {
            setLoading(true)
            try {
                const addedUser = await createUser({password: "password1", ...values});
                setNewUser(addedUser)
                resetForm();
                hideModal()
            } catch (error) {
                setStatus('User detail is invalid')
                setSubmitting(false)
            }
            setLoading(false)
        },
    })

    const hideModal = () => {
        setShowModal(false);
    }
    const openModal = () => {
        setShowModal(true);
    };

    const updateUserRole = (userId: string, newRole: string) => {
        const updatedUsers = users.map(user => {
            if (user.id === userId) {
                return { ...user, role: newRole };
            }
            return user;
        });
        setUsers(updatedUsers);
    };
    const updateUserActive = (userId: string, newActive: boolean) => {
        const updatedUsers = users.map(user => {
            if (user.id === userId) {
                return { ...user, active: newActive };
            }
            return user;
        });
        setUsers(updatedUsers);
    };
    const fetchUsers = async () => {
        try {
            const response = await getUsersWithPages(page);
            const {results, totalPages} = response;
            setUsers(results);
            setTotalPages(totalPages);
        } catch(error) {
            console.log("Error while getting users.");
        }
    }


    return (
        <>
            <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                <div className="fs-1">User list</div>
                <button className="btn btn-active-light-primary" onClick={openModal}>Add user</button>
            </div>
            <div className={`w-lg-1024px bg-body rounded shadow-sm p-5 p-lg-5 mx-auto fade-in-up`}>
                <div className="table-responsive">
                    <table className="table gs-4 gy-4 gx-4 mb-0">
                        <thead>
                        <tr className="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
                            <th>User</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users && users.map(user => (<UserItem key={user.id} user={user} updateUserRole={updateUserRole} updateUserActive={updateUserActive} onDeleteUser={fetchUsers}></UserItem>))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ul className="pagination mt-3">
                <li className={`page-item previous ${page === 1 && 'disabled'}`}>
                    <button onClick={() => setPage(page - 1)} className="page-link">
                        <i className="previous"></i>
                    </button>
                </li>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <li key={index} className={`page-item ${page === index + 1 ? 'active' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => setPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li className={`page-item next ${page === totalPages && 'disabled'}`}>
                    <button
                        onClick={() => setPage(page + 1)} className="page-link"
                        disabled={page === totalPages}
                    >
                        <i className="next"></i>
                    </button>
                </li>
            </ul>


            <CustomModal
                title="Add user"
                show={showModal}
                onHide={hideModal}
            >
                <form
                    className={`form w-100 my-4 p-4`}
                    onSubmit={formik.handleSubmit}
                    noValidate
                    id='kt_edit_profile_form'
                >
                    <Input
                        label="Name"
                        formikFieldProps={formik.getFieldProps('name')}
                        formikTouched={formik.touched.name}
                        formikError={formik.errors.name}
                        name="name"
                        type="text"
                        required={true}
                        requiredStar={true}
                    />
                    <Input
                        label="Email"
                        formikFieldProps={formik.getFieldProps('email')}
                        formikTouched={formik.touched.email}
                        formikError={formik.errors.email}
                        name="email"
                        type="text"
                        required={true}
                        requiredStar={true}
                    />
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
                    <div className='text-center mt-4'>
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
        </>
    );
}