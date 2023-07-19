import React from 'react';
import {WithChildren} from "../../../helpers";
import classes from './Button.module.css';

type ButtonProps = {
    type: "button" | "submit" | "reset"
    id: string
    disabled: boolean
    loading?: boolean
}

export const Button: React.FC<ButtonProps & WithChildren> = (props) => {
    const {
        type,
        id,
        disabled,
        loading,
        children,
    } = props

    return (
        <button
            type={type}
            id={id}
            className={`${classes['boxed-btn']} ${disabled && 'disabled'}`}
            disabled={disabled}
        >
            {!loading && <span className='indicator-label'>{children}</span>}
            {loading && ( <span className='indicator-progress' style={{display: 'block'}}>
                    Please wait...<span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
                    )}
        </button>
    );
}