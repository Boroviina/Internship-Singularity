import React from 'react';
import {WithChildren} from "../../../../_metronic/helpers";

type ButtonProps = {
    type: "button" | "submit" | "reset"
    id?: string
    disabled?: boolean
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
        <div className="d-grid">
            <button
                type={type}
                id={id}
                // className={`${filled ? `btn btn-white` : `btn btn-pink`}`}
                className="btn btn-active-light-success"
                disabled={disabled}
                onClick={onClick ? onClick : undefined}
            >
                {!loading && <span className='indicator-label'>{children}</span>}
                {loading && ( <span className='indicator-progress' style={{display: 'block'}}>
                    Please wait...<span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
                )}
            </button>
        </div>

    );
}