import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import {HeaderCard} from "../../shared/components/HeaderCard";
import {CustomCard} from "../../shared/components/layout/CustomCard";
import {Input} from "../../shared/components/form/Input";
import {Button} from "../../shared/components/form/Button";
import CustomModal from "../../shared/components/CustomModal";
import {useAuth} from "../../modules/auth";
import {updateUser} from "../../shared/services/user.service";


const editProfileSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('First name is required'),
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Invalid phone number'),
    occupation: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols'),
    companyName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols'),
    language: Yup.string()
        .min(2, 'Minimum 2 symbols')
        .max(50, 'Maximum 50 symbols'),
    website: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols'),
})

export const ProfileSettings = () => {
    const {currentUser, setCurrentUser} = useAuth()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const initialValues = {
        name: currentUser.name,
        phone: currentUser.phone || '',
        occupation: currentUser.occupation || '',
        companyName: currentUser.companyName || '',
        language: currentUser.language || '',
        website: currentUser.website || '',
    }

    const formik = useFormik({
        initialValues,
        validationSchema: editProfileSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoading(true)
            try {
                const user = {};
                for (const value in values) {
                    if(values[value]) {
                        user[value] = values[value];
                    }
                }

                const updatedUser = await updateUser(`${currentUser.id}`, user)
                setCurrentUser(updatedUser)

                openModal()
            } catch (error) {
                setStatus('Profile detail is invalid')
                setSubmitting(false)
            }
            setLoading(false)
        },
    })

    const hideModal = () => {
        setShowModal(false);
        navigate('/profile/overview')
    }
    const openModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <CustomCard width="96%" className="mt-5">
                <HeaderCard title="Settings">Basic settings of your profile</HeaderCard>
                <CustomCard className="shadow rounded-2">
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
                        />
                        <Input
                            label="Contact phone"
                            formikFieldProps={formik.getFieldProps('phone')}
                            formikTouched={formik.touched.phone}
                            formikError={formik.errors.phone}
                            name="phone"
                            type="text"
                        />
                        <Input
                            label="Occupation"
                            formikFieldProps={formik.getFieldProps('occupation')}
                            formikTouched={formik.touched.occupation}
                            formikError={formik.errors.occupation}
                            name="occupation"
                            type="text"
                        />
                        <Input
                            label="Company"
                            formikFieldProps={formik.getFieldProps('companyName')}
                            formikTouched={formik.touched.companyName}
                            formikError={formik.errors.companyName}
                            name="companyName"
                            type="text"
                        />
                        <Input
                            label="Language"
                            formikFieldProps={formik.getFieldProps('language')}
                            formikTouched={formik.touched.language}
                            formikError={formik.errors.language}
                            name="language"
                            type="text"
                        />
                        <Input
                            label="Website"
                            formikFieldProps={formik.getFieldProps('website')}
                            formikTouched={formik.touched.website}
                            formikError={formik.errors.website}
                            name="website"
                            type="text"
                        />

                        <div className='text-center mt-4'>
                            <Button
                                type="submit"
                                id='kt_edit_profile_submit'
                                disabled={formik.isSubmitting || !formik.isValid}
                                loading={loading}
                            >Continue</Button>
                        </div>
                    </form>
                </CustomCard>
            </CustomCard>
            <CustomModal title="Success" show={showModal} onHide={hideModal} backdrop="static" keyboard={false}>
                You successfully updated your profile!
            </CustomModal>
        </>
    )
}