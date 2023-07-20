import React from 'react';
import clsx from "clsx";

type InputProps = {
    label?: string
    placeholder?: string
    formikFieldProps: any
    formikTouched?: boolean
    formikError?: string
    name: string
    type: "text" | "email" | "password"
    required: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = (props) => {
    const {
        label,
        placeholder,
        formikFieldProps,
        formikTouched,
        formikError,
        name,
        type,
        required,
    } = props

    return (
        <div className='fv-row mb-3'>
            {label && <label className="form-label fs-6 fw-bolder text-dark">{label}</label>}
            <input
                {...formikFieldProps}
                placeholder={placeholder}
                className={clsx(
                    `form-control form-control-lg form-control-solid `,
                    { 'is-invalid': required && formikTouched && formikError },
                    { 'is-valid': required && formikTouched && !formikError }
                )}
                type={type}
                name={name}
                autoComplete='off'
            />
            {required && formikTouched && formikError && (
                <div className="invalid-feedback">
                    {formikError}
                </div>
            )}
        </div>
    );
}

