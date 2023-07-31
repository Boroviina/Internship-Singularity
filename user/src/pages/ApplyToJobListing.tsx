import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {Alert} from "../shared/components/Alert";
import {Input} from "../shared/components/form/Input";
import {InputFile} from "../shared/components/form/InputFile";
import {Button} from "../shared/components/form/Button";
import {createJobApplication} from "../shared/services/job-application.service";
import CustomInfoModal from "../shared/components/CustomInfoModal";
import {Header} from "./Header/Header";
import {Footer} from "./generalFooter/Footer";
import {getJob} from "../shared/services/job.service";
import {HeaderCard} from "../shared/components/HeaderCard";
import {CustomCard} from "../shared/components/layout/CustomCard";

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
    }, [jobId]);

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
            <CustomCard width="96%">
                <HeaderCard title="Apply for a job">Apply for a {jobListing && jobListing.jobTitle} position</HeaderCard>
                <CustomCard className="shadow rounded-2">
                    <form
                        className={`form w-100 my-4 p-4`}
                        onSubmit={formik.handleSubmit}
                        noValidate
                        id='kt_apply_for_job_form'
                        encType='multipart/form-data'
                    >
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

                        <div className='text-center mt-4'>
                            <Button
                                type="submit"
                                id='kt_apply_for_job_submit'
                                disabled={formik.isSubmitting || !formik.isValid}
                                loading={loading}
                            >Continue</Button>
                        </div>
                    </form>
                </CustomCard>
            </CustomCard>
            <Footer/>
            <CustomInfoModal title="Success" show={showModal} onHide={hideModal}>
                Thank you for applying!
            </CustomInfoModal>
        </>
    )
}