import React from 'react';
import clsx from "clsx";

const InputField = ({name, placeholder, type, formikFieldProps, formikTouched, formikErrors}) => {
    return (
        <>
            <label className='form-label fw-bolder text-dark fs-6'>{name}</label>
            <input value=""
                placeholder={placeholder}
                type={type}
                autoComplete='off'
                {...formikFieldProps}
                className={clsx(
                    'form-control form-control-lg form-control-solid',
                    {
                        'is-invalid': formikTouched && formikErrors,
                    },
                    {
                        'is-valid': formikTouched && !formikErrors && formikFieldProps.value !== '',
                    }
                )}
            />
            {formikTouched && formikErrors && (
                <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                        <span role='alert'>{formikErrors}</span>
                    </div>
                </div>
            )}
        </>
    );
};
export default InputField;