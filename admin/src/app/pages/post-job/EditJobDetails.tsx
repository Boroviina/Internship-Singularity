import React, {useState, useEffect} from 'react';
import {JobDetailsForm} from "./JobDetailsForm";
import {changeJob, getJob} from '../../shared/services/job.service';
import {useParams} from 'react-router-dom';
import {useFormik} from "formik";
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';

export function EditJobDetails() {
    const [existingJobDetails, setExistingJobDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchExistingJob = async () => {
            try {
                setLoading(true);
                const jobData = await getJob(id);
                console.log("Fetched job data:", jobData);
                setExistingJobDetails(jobData);
                setLoading(false);

            } catch (error) {
                console.log("Error fetching job details:", error);
                setLoading(false);
            }
        }
        fetchExistingJob();
    }, [id]);

    useEffect(() => {
    }, [existingJobDetails]);

    const formik = useFormik({
        initialValues: {
            jobTitle: existingJobDetails?.jobTitle || '',
            requirements: {
                specialization: existingJobDetails?.requirements?.specialization,
                experience: existingJobDetails?.requirements?.experience,
                education: existingJobDetails?.requirements?.education,
                skills: existingJobDetails?.requirements?.skills,
                language: existingJobDetails?.requirements?.language,
                drivingLicense: existingJobDetails?.requirements?.drivingLicense,
            },
            location: existingJobDetails?.location,
            salary: existingJobDetails?.salary,
            employmentType: existingJobDetails?.employmentType,
            description: existingJobDetails?.description,
            appDeadline: existingJobDetails?.appDeadline,
            appInstructions: existingJobDetails?.appInstructions,
            positionsNum: existingJobDetails?.positionsNum,
            remote: existingJobDetails?.remote,
            cv: existingJobDetails?.cv,
            coverLetter: existingJobDetails?.coverLetter,
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            jobTitle: Yup.string()
                .max(100, 'Must be 100 characters or less')
                .required('Required'),

            requirements: Yup.object().shape({
                specialization: Yup.string()
                    .max(100, 'Must be 100 characters or less'),
                experience: Yup.string()
                    .max(100, 'Must be 100 characters or less'),
                education: Yup.string()
                    .max(100, 'Must be 100 characters or less'),
                skills: Yup.string()
                    .max(100, 'Must be 100 characters or less'),
                language: Yup.string()
                    .max(30, 'Must be 30 characters or less'),
            }),
            location: Yup.string().max(100, 'Must be 100 characters or less'),
            salary: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            employmentType: Yup.string().max(30, 'Must be 30 characters or less'),
            remote: Yup.string().max(30, 'Must be 30 characters or less'),
            description: Yup.string()
                .max(10000, 'Must be 10000 characters or less')
                .required('Required'),
            appDeadline: Yup.date()
                .nullable()
                .required("Please input Expiry Date")
                .min(new Date(Date.now()), 'Must be at least tomorrow'),
            appInstructions: Yup.string()
                .max(500, 'Must be 500 characters or less')
                .required('Required'),
            positionsNum: Yup.number()
                .min(1, 'Must be at least 1 position')
                .max(10, 'Can be maximum 10 open positions per job advertisement')
                .required('Required')
                .integer('It must be whole number')
                .positive('It must be positive number')
        }),
        onSubmit: async (values, {resetForm, setStatus, setSubmitting}) => {
            setLoading(true)
            try {
                setSubmitting(false);
                console.log(values);
                await changeJob(id, values);
                setLoading(false);
                navigate('/job-listings');
            } catch (error) {
                setStatus('Check if all inputs are filled');
                setSubmitting(false);
                setLoading(false);
            }
            resetForm();
        },
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!existingJobDetails) {
        return <div>Error loading job details</div>;
    }


    return <>
        <JobDetailsForm formik={formik} title={existingJobDetails.jobTitle} loading={loading}/>
    </>
}