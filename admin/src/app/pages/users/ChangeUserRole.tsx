import React, {useState} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import {Select} from "../../shared/components/form/Select";
import {Role} from "../../shared/enums/roles.enum";
import {Button} from "../../shared/components/form/Button";

type ChangeUserRoleProps = {
    userRole: string
    confirmChangesToUser(values: object): Promise<void>
}

const editUserSchema = Yup.object().shape({
    role: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Role is required'),
})

export const ChangeUserRole: React.FC<ChangeUserRoleProps> = (props) => {
    const {
        userRole,
        confirmChangesToUser,
    } = props

    const initialValues = {
        role: userRole || '',
    }

    const [loading, setLoading] = useState(false);

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

    return (
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
    )
}