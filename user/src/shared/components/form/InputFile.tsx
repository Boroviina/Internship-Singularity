import React from "react";
import clsx from "clsx";

type InputFileProps = {
    label?: string
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
        formikTouched,
        formikError,
        name,
        required,
        onChange,
    } = props

    return (
        <div className='fv-row mb-3'>
            {label && <label className="form-label fs-6 fw-bolder text-dark">{label}</label>}
            <input
                className={clsx(
                    `form-control `,
                    { 'is-invalid': required && formikTouched && formikError },
                    { 'is-valid': required && formikTouched && !formikError }
                )}
                type="file"
                name={name}
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