import React from 'react';
import clsx from "clsx";

const InputField = (props) => {
    return (
        <>
            <label className='form-label fw-bolder text-dark fs-6'>{props.name}</label>
            <input
                placeholder={props.placeholder}
                type={props.type}
                autoComplete='off'
                {...props.formikFieldProps}
                className={clsx(
                    'form-control form-control-lg form-control-solid',
                    {
                        'is-invalid': props.formikTouched && props.formikErrors,
                    },
                    {
                        'is-valid': props.formikTouched && !props.formikErrors,
                    }
                )}
            />
            {props.formikTouched && props.formikErrors && (
                <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                        <span role='alert'>{props.formikErrors}</span>
                    </div>
                </div>
            )}
        </>
    );
};
export default InputField;