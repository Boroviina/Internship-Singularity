import React from 'react';
import clsx from 'clsx';

type Option = {
    value: string;
    label: string;
};

type SelectProps = {
    label?: string
    formikFieldProps: any
    formikTouched?: boolean
    formikError?: string
    name: string
    required?: boolean
    id?: string
    requiredStar?: boolean
    options?: Option[]
}

export const Select: React.FC<SelectProps> = (props) => {
    const {
        label,
        formikFieldProps,
        formikTouched,
        formikError,
        name,
        required,
        id,
        requiredStar,
        options = [],
    } = props

    return (
        <div className='fv-row mb-3'>
            <label htmlFor={id} className="form-label fs-6 fw-bolder text-label">{label}{requiredStar && <span className="text-danger">*</span>}</label>
            <select
                {...formikFieldProps}
                className={clsx(
                    `form-control form-control-solid mb-3 `,
                    {'is-invalid': required && formikTouched && formikError},
                    {'is-valid': required && formikTouched && !formikError}
                )}
                name={name}
                id={id}>
                <option value=""></option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

