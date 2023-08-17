import React, {useState} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import {Select} from "../../shared/components/form/Select";
import {Role} from "../../shared/enums/roles.enum";
import {Button} from "../../shared/components/form/Button";

type FilterUsersProps = {
    setRoleFilter(role: string): void
    setActiveFilter(active: string): void
    setPage(page: number): void
}

const filterSchema = Yup.object().shape({
    role: Yup.string(),
    active: Yup.string()
})
const initialValues = {
    active: '',
    role: '',
}

export const FilterUsers: React.FC<FilterUsersProps> = (props) => {
    const {
        setRoleFilter,
        setActiveFilter,
        setPage,
    } = props

    const [loading, setLoading] = useState(false);

    const formikFilter = useFormik({
        initialValues,
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

    return (
        <form
            className={`form my-4 p-4`}
            onSubmit={formikFilter.handleSubmit}
            noValidate
            id='kt_filter_form'
            style={{width: '234px'}}
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
        </form>
    )
}