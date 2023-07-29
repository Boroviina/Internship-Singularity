import React from 'react';
import clsx from 'clsx';

type InputProps = {
    label?: string
    placeholder?: string
    formikFieldProps: any
    formikTouched?: boolean
    formikError?: string
    name: string
    type: "text" | "email" | "password"
    required?: boolean
    id?: string
    additionalDescription?: string
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
        id,
        additionalDescription
    } = props

    return (
        <div className='fv-row mb-3'>
            {label && <label htmlFor={id} className="form-label fs-6 fw-bolder" style={{color: '#010b1d'}}>{label}</label>}
            <input
                {...formikFieldProps}
                placeholder={placeholder && ''}
                className={clsx(
                    `form-control form-control-solid `,
                    { 'is-invalid': required && formikTouched && formikError },
                    { 'is-valid': required && formikTouched && !formikError }
                )}
                type={type}
                name={name}
                autoComplete='off'
            />
            {additionalDescription && <div className='text-muted'>
                {additionalDescription}
            </div>}
            {required && formikTouched && formikError && (
                <div className="invalid-feedback">
                    {formikError}
                </div>
            )}
        </div>
    );
}

