import React, {useEffect, useState} from "react";
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {KTSVG} from "../../../_metronic/helpers";
import {getFilteredUsersWithPages} from "../../shared/services/user.service";
import {UserItem} from "./UserItem";
import CustomModal from "../../shared/components/CustomModal";
import {Input} from "../../shared/components/form/Input";
import {Button} from "../../shared/components/form/Button";
import {Role} from "../../shared/enums/roles.enum";
import {createUser} from "../../shared/services/user.service";
import {Select} from "../../shared/components/form/Select";
import {Pagination} from "../../shared/components/Pagination";
import {CustomDropdown} from "../../shared/components/CustomDropdown";

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
        .required('Role is required'),
})
const initialValuesAddUser = {
    name: '',
    email: '',
    role: '',
}

const filterSchema = Yup.object().shape({
    role: Yup.string(),
    active: Yup.string()
})
const initialValuesFilter = {
    active: '',
    role: '',
}

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [roleFilter, setRoleFilter] = useState('');
    const [activeFilter, setActiveFilter] = useState('');

    const fetchUsers = async () => {
        try {
            const response = await getFilteredUsersWithPages(page, {role: roleFilter, active: activeFilter});
            const {results, totalPages} = response;
            setUsers(results);
            setTotalPages(totalPages);
        } catch(error) {
            console.log("Error while getting users.");
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [page, newUser, roleFilter, activeFilter]);

    const formik = useFormik({
        initialValues: initialValuesAddUser,
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

    const formikFilter = useFormik({
        initialValues: initialValuesFilter,
        validationSchema: filterSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoading(true)
            try {
                setRoleFilter(values.role)
                setActiveFilter(values.active)
                setPage(1)
            } catch (error) {
                setStatus('Filter detail is invalid')
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

    return (
        <>
            <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                <div className="fs-1 d-none d-sm-block">Users list</div>
                <div className="d-flex flex-row">
                    <CustomDropdown options={[
                        { content:  <form
                                className={`form w-100 my-4 p-4`}
                                onSubmit={formikFilter.handleSubmit}
                                noValidate
                                id='kt_filter_form'
                            >
                                <Select
                                    label="Role"
                                    formikFieldProps={formikFilter.getFieldProps('role')}
                                    formikTouched={formikFilter.touched.role}
                                    formikError={formikFilter.errors.role}
                                    name="role"
                                    id="role"
                                    options={Object.entries(Role).map(([key, value]) => ({value: key, label: value,}))}
                                />
                                <Select
                                    label="Status"
                                    formikFieldProps={formikFilter.getFieldProps('active')}
                                    formikTouched={formikFilter.touched.active}
                                    formikError={formikFilter.errors.active}
                                    name="active"
                                    id="active"
                                    options={[{value: 'true', label: 'approved'}, {value: 'false', label: 'pending'}]}
                                />
                                <div className='text-center mt-4 d-grid'>
                                    <Button
                                        state="primary"
                                        type="submit"
                                        id='kt_filter_submit'
                                        disabled={formikFilter.isSubmitting || !formikFilter.isValid}
                                        loading={loading}
                                    >Continue</Button>
                                </div>
                                <div className='text-center mt-4 d-grid'>
                                    <Button
                                        state="primary"
                                        type="button"
                                        onClick={() => {formikFilter.resetForm(); setRoleFilter(''); setActiveFilter(''); setPage(1)}}
                                    >Clear</Button>
                                </div>
                            </form>},
                    ]}></CustomDropdown>
                    <button className="btn btn-light-primary ms-2" onClick={openModal}><KTSVG path="/media/icons/duotune/abstract/abs011.svg" className="svg-icon-muted svg-icon" />Add user</button>
                </div>
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
                        {users && users.map(user => (<UserItem key={user.id} user={user} updateUsers={fetchUsers}></UserItem>))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Pagination
                page={page}
                totalPages={totalPages}
                onPageChange={newPage => setPage(newPage)}
            />

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
        </>
    );
}