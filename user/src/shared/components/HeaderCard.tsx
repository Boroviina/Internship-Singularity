import React from 'react';
import {WithChildren} from "../../helpers";

type HeaderCardProps = {
    title?: string
    className?: string
}

export const HeaderCard: React.FC<HeaderCardProps & WithChildren> = (props) => {
    const {
        title,
        className,
        children,
    } = props

    return (
        <div className={`mx-auto shadow overflow-hidden card-bg p-4 mb-1 ${className}`}>
            <div className="d-flex flex-wrap align-items-center align-content-between">
                <div>
                    {title && <p className="fw-bold text-label text-muted opacity-75 fs-5 mb-0">{title}</p>}
                    <div className={`mb-0 text-label fw-bold fs-3`}>{children}</div>
                </div>
            </div>
        </div>
    );
}