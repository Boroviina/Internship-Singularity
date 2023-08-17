import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {createJob} from "../../shared/services/job.service";
import {JobDetailsForm} from "./JobDetailsForm";
import {useNavigate} from "react-router-dom";

export function JobPosting() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            jobTitle: '',
            requirements: {
                specialization: '',
                experience: '',
                education: '',
                skills: '',
                language: '',
                drivingLicense: false,
            },
            location: '',
            salary: '',
            employmentType: '',
            description: '',
            appDeadline: '',
            appInstructions: '',
            positionsNum: '',
            remote: '',
            cv: false,
            coverLetter: false,
        },
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
                    .max(100, 'Must be 100 characters or less'),
            }),
            location: Yup.string().max(100, 'Must be 100 characters or less'),
            salary: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
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
                await createJob(values);
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
    return <>
        <JobDetailsForm formik={formik} title={"Insert Job Features"} loading={loading} command={"Post job"}/>
    </>
}