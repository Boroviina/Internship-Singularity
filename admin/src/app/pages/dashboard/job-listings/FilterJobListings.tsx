import React, {useState} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import {Select} from "../../../shared/components/form/Select";
import {Button} from "../../../shared/components/form/Button";
import {JobTypes} from "../../../shared/enums/job-types.enum";

type FilterJobListingsProps = {
    setJobTypeFilter(jobType: string): void
    setStatusFilter(status: string): void
    setPage(page: number): void
}

const filterSchema = Yup.object().shape({
    jobType: Yup.string(),
    status: Yup.string()
})
const initialValues = {
    status: '',
    jobType: '',
}

export const FilterJobListings: React.FC<FilterJobListingsProps> = (props) => {
    const {
        setJobTypeFilter,
        setStatusFilter,
        setPage,
    } = props

    const [loading, setLoading] = useState(false);

    const formikFilter = useFormik({
        initialValues,
        validationSchema: filterSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoading(true)
            try {
                setJobTypeFilter(values.jobType)
                setStatusFilter(values.status)
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
            style={{width: '250px'}}
        >
            <Select
                label="Job type"
                formikFieldProps={formikFilter.getFieldProps('jobType')}
                formikTouched={formikFilter.touched.jobType}
                formikError={formikFilter.errors.jobType}
                name="jobType"
                id="jobType"
                options={Object.entries(JobTypes).map(([key, value]) => ({value: key, label: value,}))}
            />
            <Select
                label="Status"
                formikFieldProps={formikFilter.getFieldProps('status')}
                formikTouched={formikFilter.touched.status}
                formikError={formikFilter.errors.status}
                name="status"
                id="status"
                options={[{value: 'active', label: 'active'}, {value: 'expired', label: 'expired'}]}
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
                    onClick={() => {formikFilter.resetForm(); setJobTypeFilter(''); setStatusFilter(''); setPage(1)}}
                >Clear</Button>
            </div>
        </form>
    )
}