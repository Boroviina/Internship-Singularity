import React from 'react';
import clsx from "clsx";

type InputProps = {
    label?: string
    placeholder?: string
    formikFieldProps: any
    formikTouched?: boolean
    formikError?: string
    name: string
    type: string
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
        <div className='row mb-2'>
            {label && <label className="form-label">{label}</label>}
            <input
                {...formikFieldProps}
                placeholder={placeholder}
                className={clsx(
                    `form-control `,
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

