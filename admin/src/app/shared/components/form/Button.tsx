import React from 'react';
import {WithChildren} from "../../../../_metronic/helpers";

type ButtonProps = {
    type?: "button" | "submit" | "reset"
    state?: "success" | "danger" | "primary" | "warning" | "info" | "dark"
    light?: boolean
    active?: boolean
    id?: string
    disabled?: boolean
    loading?: boolean
    classes?: string
    onClick?: () => void
}

export const Button: React.FC<ButtonProps & WithChildren> = (props) => {
    const {
        type = "button",
        state = "primary",
        light = true,
        active = true,
        id,
        disabled,
        loading,
        classes,
        onClick,
        children,
    } = props

    return (
        <button
            type={type}
            id={id}
            className={`btn btn-${active && 'active-'}${light && 'light-'}${state} ${classes && classes}`}
            disabled={disabled}
            onClick={onClick ? onClick : undefined}
        >
            {!loading && <span className='indicator-label'>{children}</span>}
            {loading && ( <span className='indicator-progress' style={{display: 'block'}}>
                    Please wait...<span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
            )}
        </button>
    );
}