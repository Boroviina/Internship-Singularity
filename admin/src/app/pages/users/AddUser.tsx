import React, {useState} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import {Select} from "../../shared/components/form/Select";
import {Role} from "../../shared/enums/roles.enum";
import {Button} from "../../shared/components/form/Button";
import {createUser} from "../../shared/services/user.service";
import {Input} from "../../shared/components/form/Input";
import {UserModel} from "../../shared/models/user.model";

type AddUserProps = {
    setNewUser(user: UserModel): void
    hideModal(): void
}

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

export const AddUser: React.FC<AddUserProps> = (props) => {
    const {
        setNewUser,
        hideModal,
    } = props

    const [loading, setLoading] = useState(false);

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

    return (
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
    )
}