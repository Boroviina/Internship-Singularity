import React from 'react';
import {WithChildren} from "../../../helpers";
import classes from './Button.module.css';

type ButtonProps = {
    type: "button" | "submit" | "reset"
    id?: string
    disabled: boolean
    loading?: boolean
    filled?: boolean
    onClick?: () => void
}

export const Button: React.FC<ButtonProps & WithChildren> = (props) => {
    const {
        type,
        id,
        disabled,
        loading,
        filled,
        onClick,
        children,
    } = props

    return (
        <button
            type={type}
            id={id}
            className={`${filled ? `${classes['filled-button']}` : `${classes['light-button']}`}`}
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