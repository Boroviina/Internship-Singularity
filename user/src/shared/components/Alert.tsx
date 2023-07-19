import React from 'react';
import {WithChildren} from "../../helpers";

type AlertProps = {
    title?: string
    // icon?: string
    state: 'primary' | 'danger' | 'warning' | 'success' | 'info'
}

export const Alert: React.FC<AlertProps & WithChildren> = (props) => {
    const {
        title,
        // icon,
        state,
        children,
    } = props

    return (
        <div className={`alert alert-${state} d-flex align-items-center p-4 m-3`}>
            {/*{icon && <KTSVG path={`/media/${icon}`} className={`svg-icon-2 svg-icon-2hx svg-icon-${state} me-4`}/>}*/}
            <div className="d-flex flex-column">
                {title && <h5 className="mb-1">{title}</h5>}
                <span>{children}</span>
            </div>
        </div>
    );
}