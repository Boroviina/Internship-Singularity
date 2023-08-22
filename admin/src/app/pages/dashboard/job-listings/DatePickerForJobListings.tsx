import React, {useState} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import {Button} from "../../../shared/components/form/Button";
import {Input} from "../../../shared/components/form/Input";

type DatePickerForJobListingsProps = {
    setStartDate(startDate: string): void
    setEndDate(endDate: string): void
    setPage(page: number): void
}

const filterSchema = Yup.object().shape({
    startDate: Yup.date(),
    endDate: Yup.date()
})
const initialValues = {
    startDate: '',
    endDate: '',
}

export const DatePickerForJobListings: React.FC<DatePickerForJobListingsProps> = (props) => {
    const {
        setStartDate,
        setEndDate,
        setPage,
    } = props

    const [loading, setLoading] = useState(false);

    const formikFilter = useFormik({
        initialValues,
        validationSchema: filterSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoading(true)
            try {
                setStartDate(values.startDate)
                setEndDate(values.endDate)
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
            <Input
                label="Start date"
                formikFieldProps={formikFilter.getFieldProps('startDate')}
                formikTouched={formikFilter.touched.startDate}
                formikError={formikFilter.errors.startDate}
                name="startDate"
                id="startDate"
                type="date"
            />
            <Input
                label="End date"
                formikFieldProps={formikFilter.getFieldProps('endDate')}
                formikTouched={formikFilter.touched.endDate}
                formikError={formikFilter.errors.endDate}
                name="endDate"
                id="endDate"
                type="date"
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
                    onClick={() => {formikFilter.resetForm(); setEndDate(''); setStartDate(''); setPage(1)}}
                >Clear</Button>
            </div>
        </form>
    )
}