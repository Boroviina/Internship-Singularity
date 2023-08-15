import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Input} from "../../../shared/components/form/Input";
import {Button} from "../../../shared/components/form/Button";
import {useAuth} from "../../../modules/auth";
import AuthService from "../../../shared/services/api-client/auth.service";
import {getEmployers, updateEmployer} from "../../../shared/services/employer.service";
import {Employer} from "../../../shared/models/employer.model";
import CustomModal from "../../../shared/components/CustomModal";
import {UserInfoSettings} from "./UserInfoSettings";
import {Role} from "../../../shared/enums/roles.enum";

const authService = new AuthService();

const editEmployerInfoSchema = Yup.object().shape({
    companyName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Company name is required'),
    industry: Yup.string()
        .min(2, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Industry is required'),
    numOfEmployees: Yup.number()
        .min(1, 'Minimum 1 employee')
        .required('Number of employees is required'),
    city: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('City is required'),
    address: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Address is required'),
    companyEmail: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Company email is required'),
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Invalid phone number')
        .required('Phone number is required'),
    fax: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Address is required'),
})

export const CompanyInfoSettings = () => {
    const {currentUser, setCurrentUser} = useAuth()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalBody, setModalBody] = useState("");
    const [employer, setEmployer] = useState<Employer>(null);

    const fetchEmployer = async () => {
        try {
            const employers = await getEmployers(`${currentUser.id}`);
            if (employers[0]) {
                setEmployer(employers[0]);

                formik.setValues({
                    companyName: employers[0].companyName || "",
                    industry: employers[0].industry || "",
                    numOfEmployees: employers[0].numOfEmployees || 0,
                    city: employers[0].city || "",
                    address: employers[0].address || "",
                    companyEmail: employers[0].companyEmail || "",
                    phone: employers[0].phone || "",
                    fax: employers[0].fax || "",
                });
            } else {
                throw new Error("This user does not exist");
            }
        } catch (error) {
            console.log(error);
            navigate("/error/404");
        }
    };

    useEffect(() => {
        fetchEmployer();
    }, []);

    const formik = useFormik({
        initialValues: {
            companyName: "",
            industry: "",
            numOfEmployees: 0,
            city: "",
            address: "",
            companyEmail: "",
            phone: "",
            fax: "",
        },
        validationSchema: editEmployerInfoSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true);
            try {
                // Update employer logic here

                const updatedEmployer = await updateEmployer(employer.id, values)
                setEmployer(updatedEmployer)
                setModalBody("You successfully updated your profile!")
                openModal()
            } catch (error) {
                setStatus("Profile detail is invalid");
                setSubmitting(false);
            }
            setLoading(false);
        },
    });

    const hideModal = () => {
        setShowModal(false);
        // navigate('/profile')
    }
    const openModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <div className="mx-auto shadow-lg rounded overflow-hidden pt-3 mb-3 border bg-body">
                <div className="fs-4 border-bottom p-3 fw-bold mb-3 text-label">Company details</div>
                <form
                    className={`form w-100 my-4 p-4`}
                    onSubmit={formik.handleSubmit}
                    noValidate
                    id='kt_edit_profile_form'
                >
                    <Input
                        label="Company name"
                        formikFieldProps={formik.getFieldProps('companyName')}
                        formikTouched={formik.touched.companyName}
                        formikError={formik.errors.companyName}
                        name="companyName"
                        type="text"
                        required={true}
                    />
                    <Input
                        label="Industry"
                        formikFieldProps={formik.getFieldProps('industry')}
                        formikTouched={formik.touched.industry}
                        formikError={formik.errors.industry}
                        name="industry"
                        type="text"
                        required={true}
                    />
                    <Input
                        label="Number of employees"
                        formikFieldProps={formik.getFieldProps('numOfEmployees')}
                        formikTouched={formik.touched.numOfEmployees}
                        formikError={formik.errors.numOfEmployees}
                        name="numOfEmployees"
                        type="text"
                        required={true}
                    />
                    <Input
                        label="City"
                        formikFieldProps={formik.getFieldProps('city')}
                        formikTouched={formik.touched.city}
                        formikError={formik.errors.city}
                        name="city"
                        type="text"
                        required={true}
                    />
                    <Input
                        label="Address"
                        formikFieldProps={formik.getFieldProps('address')}
                        formikTouched={formik.touched.address}
                        formikError={formik.errors.address}
                        name="address"
                        type="text"
                        required={true}
                    />
                    <Input
                        label="Company email"
                        formikFieldProps={formik.getFieldProps('companyEmail')}
                        formikTouched={formik.touched.companyEmail}
                        formikError={formik.errors.companyEmail}
                        name="companyEmail"
                        type="text"
                        required={true}
                    />
                    <Input
                        label="Phone"
                        formikFieldProps={formik.getFieldProps('phone')}
                        formikTouched={formik.touched.phone}
                        formikError={formik.errors.phone}
                        name="phone"
                        type="text"
                        required={true}
                    />
                    <Input
                        label="Fax"
                        formikFieldProps={formik.getFieldProps('fax')}
                        formikTouched={formik.touched.fax}
                        formikError={formik.errors.fax}
                        name="fax"
                        type="text"
                        required={true}
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
            <CustomModal title="Success" show={showModal} onHide={hideModal} footer={<Button state="success" onClick={hideModal}>Continue</Button>}>
                {modalBody}
            </CustomModal>
        </>
    )
}