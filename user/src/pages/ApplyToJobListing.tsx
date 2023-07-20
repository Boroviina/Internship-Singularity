import React, {useState} from "react";
import {useParams} from "react-router-dom";
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {Alert} from "../shared/components/Alert";
import {Input} from "../shared/components/form/Input";
import {InputFile} from "../shared/components/form/InputFile";
import {Button} from "../shared/components/form/Button";
import {createJobApplication} from "../shared/services/job-application.service";
import {useAuth} from "../modules/auth";

const applyForJobSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .matches(/^\d{10}$/, 'Invalid phone number')
        .required('Phone number is required'),
    cv: Yup.mixed()
        .required('CV is required'),
    coverLetter: Yup.mixed()
        .optional(),
})

const initialValues = {
    phoneNumber: "",
    cv: "",
    coverLetter: "",
}

export const ApplyToJobListing = () => {
    const {jobId} = useParams();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    const formik = useFormik({
        initialValues,
        validationSchema: applyForJobSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoading(true)
            setError(null);
            try {
                const form = new FormData();
                form.append('phoneNumber', values.phoneNumber);
                form.append('cv', values.cv);
                if(values.coverLetter !== '') {
                    form.append('coverLetter', values.coverLetter);
                }
                form.append('job', jobId);
                await createJobApplication(form);
            } catch (error) {
                setError(error.message);
                setStatus('The apply for job detail is incorrect')
                setSubmitting(false)
            }
            setLoading(false)
        },
    })

    const {currentUser, logout} = useAuth()

    return (
        <>
        <a onClick={logout} className='menu-link px-5'>
            Sign Out
        </a>

        <form
            className={`form w-100 container`}
            onSubmit={formik.handleSubmit}
            noValidate
            id='kt_apply_for_job_form'
            encType='multipart/form-data'
        >
            <div className='text-center m-3'>
                <h1 className='text-dark mb-3'>Apply for a job</h1>
            </div>

            {!loading && error && <Alert state="danger">{error}</Alert>}

            <Input
                label="Phone number"
                formikFieldProps={formik.getFieldProps('phoneNumber')}
                formikTouched={formik.touched.phoneNumber}
                formikError={formik.errors.phoneNumber}
                name="phoneNumber"
                type="text"
                placeholder="Enter your phone number"
                required={true}
                onChange={(event) => {console.log(event)}}
            />

            <InputFile
                label="CV"
                name="cv"
                required={true}
                formikTouched={formik.touched.cv}
                formikError={formik.errors.cv}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    formik.setFieldValue("cv", event.currentTarget.files[0]);
                }}
            />

            <InputFile
                label="Cover letter"
                name="coverLetter"
                required={false}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    formik.setFieldValue("coverLetter", event.currentTarget.files[0]);
                }}
            />

            <div className='text-center'>
                <Button
                    type="submit"
                    id='kt_apply_for_job_submit'
                    disabled={formik.isSubmitting || !formik.isValid}
                    loading={loading}
                >Continue</Button>
            </div>
        </form>
        </>
    )
}