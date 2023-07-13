import React from "react";
import clsx from "clsx";

export const JobInputField = (props) => {
    return (
        <>
            <label className={`form-label text-dark fw-bold fs-6`}>{props.name}</label>
            <input type={props.type}
                   placeholder={props.placeholder}
                   {...props.formikFieldProps}
                   className={clsx(
                       'form-control form-control-lg form-control-solid',
                       {
                           'is-invalid': props.formikTouched && props.formikErrors,
                       },
                       {
                           'is-valid': props.formikTouched && !props.formikErrors,
                       }
                   )}/>
            {props.formikTouched && props.formikErrors ? (
                <div className={'text-danger mt-1 fs-6 italic'}>{props.formikErrors}</div>) : null}
        </>
    )
}
export const JobTextareaField = (props) => {
    return (
        <>
            <label className={`form-label text-dark fw-bold fs-6`}>{props.name}</label>
            <textarea
                cols={props.cols}
                rows={props.rows}
                placeholder={props.placeholder}
                {...props.formikFieldProps}
                className={clsx(
                    'form-control form-control-lg form-control-solid',
                    {
                        'is-invalid': props.formikTouched && props.formikErrors,
                    },
                    {
                        'is-valid': props.formikTouched && !props.formikErrors,
                    }
                )}></textarea>
            {props.formikTouched && props.formikErrors ? (
                <div className={'text-danger mt-1 fs-6 italic'}>{props.formikErrors}</div>) : null}
        </>
    )
}
