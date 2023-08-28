import React from "react";
import clsx from "clsx";

type Option={
    value: string;
    label: string;
};

type SelectFieldProps= {
    label: string;
    name: string;
    formikFieldProps: any;
    formikTouched: boolean;
    formikErrors: string;
    options: Option[];
}
export const JobSelectField: React.FC<SelectFieldProps>=(props)=> {

    const {
        label,
        formikFieldProps,
        formikTouched,
        formikErrors,
        name,
        options= []
    }=props
    return <>
        <label htmlFor="" className={'form-label text-dark fw-bold fs-6 '}>{label}</label>
        <select name={name} id={name}
                {...formikFieldProps}
                className={clsx(
                    `form-control form-control-solid `,
                    {'is-invalid': formikTouched && formikErrors},
                    {'is-valid': formikTouched && !formikErrors}
                )}

        >
            <option value="">Choose...</option>
            {options.map((option)=>(
               <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
        {formikTouched && formikErrors ? (
            <div className={'text-danger mt-1 fs-6 italic'}>{formikErrors}</div>) : null}
    </>
}