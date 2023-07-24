import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {useAuth} from "../modules/auth";
import {Alert} from "../shared/components/Alert";
import {Input} from "../shared/components/form/Input";
import {InputFile} from "../shared/components/form/InputFile";
import {Button} from "../shared/components/form/Button";
import {createJobApplication} from "../shared/services/job-application.service";
import CustomModal from "../shared/components/CustomModal";
import {Header} from "./Header/Header";
import {Footer} from "./generalFooter/Footer";
import {getJob} from "../shared/services/job.service";

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
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [jobListing, setJobListing] = useState(null);

    useEffect(() => {
        const fetchJobListing = async () => {
            setLoading(true);
            setError(null);
            try {
                const job = await getJob(jobId);
                setJobListing(job);
            } catch(error) {
                setError("Error while trying to apply for job listings.");
                navigate('/error');
            }
            setLoading(false);
        }
        fetchJobListing();
    }, [jobId, navigate]);

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

                openModal()
            } catch (error) {
                setError(error.message);
                setStatus('The apply for job detail is incorrect')
                setSubmitting(false)
            }
            setLoading(false)
        },
    })

    const hideModal = () => {
        setShowModal(false);
        // navigate(`/job-listings/${jobId}`);
    }
    const openModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <Header/>
            <a onClick={logout} className='menu-link px-5'> Sign Out </a>

            <form
                className={`form w-100 container mb-5`}
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
                    formikFieldProps={formik.getFieldProps('cv')}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        formik.setFieldValue("cv", event.currentTarget.files[0]);
                    }}
                />

                <InputFile
                    label="Cover letter"
                    name="coverLetter"
                    required={false}
                    formikFieldProps={formik.getFieldProps('cv')}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        formik.setFieldValue("coverLetter", event.currentTarget.files[0]);
                    }}
                />

                <div className='text-center mt-5'>
                    <Button
                        type="submit"
                        id='kt_apply_for_job_submit'
                        disabled={formik.isSubmitting || !formik.isValid}
                        loading={loading}
                    >Continue</Button>
                </div>
            </form>
            <Footer/>
            <CustomModal title="Success" show={showModal} onHide={hideModal} backdrop="static" keyboard={false}>
                Thank you for applying!
            </CustomModal>
        </>
    )
}