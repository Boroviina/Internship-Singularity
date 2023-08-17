import React from 'react';
import {WithChildren} from "../../../helpers";

type ButtonProps = {
    type: "button" | "submit" | "reset"
    id?: string
    disabled?: boolean
    loading?: boolean
    filled?: boolean
    onClick?: () => void
    width?: string
    height?: string
}

export const Button: React.FC<ButtonProps & WithChildren> = (props) => {
    const {
        type,
        id,
        disabled,
        loading,
        filled,
        onClick,
        width='150px',
        height='60px',
        children,
    } = props

    return (
        <button
            type={type}
            id={id}
            className={`${filled ? `btn btn-white` : `btn btn-pink`}`}
            style={{width: width, height: height}}
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