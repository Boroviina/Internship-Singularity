import React from 'react';
import {WithChildren} from "../../helpers";
import classes from "./HeaderCard.module.css";

type HeaderCardProps = {
    title: string
    className?: string
}

export const HeaderCard: React.FC<HeaderCardProps & WithChildren> = (props) => {
    const {
        title,
        className,
        children,
    } = props

    return (
        <div className={`mx-auto shadow overflow-hidden ${classes['header-card']} p-4 mb-1 ${className}`}>
            <div className="d-flex flex-wrap align-items-center align-content-between">
                <div className={`${classes['text-dark-blue']}`}>
                    <p className="fw-bold fs-4 mb-0">{title}</p>
                    <p className="mb-0 fs-5 opacity-75">{children}</p>
                </div>
            </div>
        </div>
    );
}