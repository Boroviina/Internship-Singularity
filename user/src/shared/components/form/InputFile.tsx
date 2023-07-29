import React from "react";
import clsx from "clsx";

type InputFileProps = {
    label?: string
    formikFieldProps?: any
    formikFieldValue?: any
    formikTouched?: boolean
    formikError?: string
    name: string
    required: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputFile: React.FC<InputFileProps> = (props) => {
    const {
        label,
        formikFieldProps,
        formikTouched,
        formikError,
        name,
        required,
        onChange,
    } = props

    const formikProps = formikFieldProps || {};
    const { onChange: formikFieldOnChange, value, ...rest } = formikProps;

    return (
        <div className='fv-row mb-3'>
            {label && <label className="form-label fs-6 fw-bolder" style={{color: '#031345'}}>{label}</label>}
            <input
                className={clsx(
                    `form-control form-control-solid `,
                    { 'is-invalid': required && formikTouched && formikError },
                    { 'is-valid': required && formikTouched && !formikError }
                )}
                type="file"
                name={name}
                {...rest}
                onChange={onChange}
            />
            {required && formikTouched && formikError && (
                <div className="invalid-feedback">
                    {formikError}
                </div>
            )}
        </div>
    );
}