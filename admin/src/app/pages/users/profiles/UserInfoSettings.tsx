import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import {format} from "date-fns";
import {Input} from "../../../shared/components/form/Input";
import {Button} from "../../../shared/components/form/Button";
import CustomModal from "../../../shared/components/CustomModal";
import {useAuth} from "../../../modules/auth";
import {updateUser} from "../../../shared/services/user.service";
import {Language} from "../../../shared/enums/languages.enum";
import AuthService from "../../../shared/services/api-client/auth.service";

const authService = new AuthService();

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
    language: Yup.string(),
    website: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols'),
    gender: Yup.string(),
    country: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols'),
    birthDate: Yup.date(),
})

export const UserInfoSettings = () => {
    const {currentUser, setCurrentUser} = useAuth()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalBody, setModalBody] = useState("");

    const initialValues = {
        name: currentUser.name,
        phone: currentUser.phone || '',
        occupation: currentUser.occupation || '',
        language: currentUser.language || '',
        country: currentUser.country || '',
        birthDate: currentUser.birthDate ? format(new Date(currentUser.birthDate), "yyyy-MM-dd") : '',
        gender: currentUser.gender || '',
        website: currentUser.website || '',
    }

    const formik = useFormik({
        initialValues,
        validationSchema: editProfileSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoading(true)
            try {
                //update user

                const updatedUser = await updateUser(`${currentUser.id}`, values)
                setCurrentUser(updatedUser)
                setModalBody("You successfully updated your profile!")
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
        navigate(`/users/${currentUser.id}`)
    }
    const openModal = () => {
        setShowModal(true);
    };

    return (
        <>
            {/*<div className="shadow rounded-2">*/}
                {/*<HeaderCard title="Settings">Basic settings of your profile</HeaderCard>*/}
            <div className="mx-auto shadow-lg rounded overflow-hidden pt-3 mb-3 border bg-body">
                <div className="fs-4 border-bottom p-3 fw-bold mb-3 text-label">User details</div>
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
                            required={formik.getFieldProps('phone').value.trim().length !== 0}
                        />
                        <Input
                            label="Occupation"
                            formikFieldProps={formik.getFieldProps('occupation')}
                            formikTouched={formik.touched.occupation}
                            formikError={formik.errors.occupation}
                            name="occupation"
                            type="text"
                            required={formik.getFieldProps('occupation').value.trim().length !== 0}
                        />
                        <label className="form-label text-label fs-6 fw-bolder" htmlFor="language">Language </label>
                        <select
                            {...formik.getFieldProps('language')}
                            className={clsx(
                                `form-control form-control-solid mb-3 `,
                                {'is-invalid': formik.touched.language && formik.errors.language && formik.getFieldProps('language').value.trim().length !== 0},
                                {'is-valid': formik.touched.language && !formik.errors.language && formik.getFieldProps('language').value.trim().length !== 0}
                            )}
                            name="language" id="language">
                            <option value=""></option>
                            {Object.entries(Language).map(([key, value]) => (
                                <option key={key} value={key}>{value}</option>
                            ))}
                        </select>
                        <Input
                            label="Country"
                            formikFieldProps={formik.getFieldProps('country')}
                            formikTouched={formik.touched.country}
                            formikError={formik.errors.country}
                            name="country"
                            type="text"
                            required={formik.getFieldProps('country').value.trim().length !== 0}
                        />
                        <Input
                            label="Date of birth"
                            formikFieldProps={formik.getFieldProps('birthDate')}
                            formikTouched={formik.touched.birthDate}
                            formikError={formik.errors.birthDate}
                            name="birthDate"
                            type="date"
                            required={formik.getFieldProps('birthDate').value.trim().length !== 0}
                        />
                        <label className="form-label fs-6 fw-bolder text-label">Gender </label>
                        <select
                            {...formik.getFieldProps('gender')}
                            className={clsx(
                                `form-control form-control-solid mb-3 `,
                                {'is-invalid': formik.touched.gender && formik.errors.gender && formik.getFieldProps('gender').value.trim().length !== 0},
                                {'is-valid': formik.touched.gender && !formik.errors.gender && formik.getFieldProps('gender').value.trim().length !== 0}
                            )}
                            name="gender">
                            <option value=""></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <Input
                            label="Website"
                            formikFieldProps={formik.getFieldProps('website')}
                            formikTouched={formik.touched.website}
                            formikError={formik.errors.website}
                            name="website"
                            type="text"
                            required={formik.getFieldProps('website').value.trim().length !== 0}
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
                </div>

            {/*</div>*/}
            <CustomModal title="Success" show={showModal} onHide={hideModal} footer={<Button onClick={hideModal}>Continue</Button>}>
                {modalBody}
            </CustomModal>
        </>
    )
}