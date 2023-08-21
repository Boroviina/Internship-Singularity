import React from "react";
import {WithChildren} from "../../../../_metronic/helpers";

type ProfileOverviewItemProps = {
    label: string
}

export const ProfileOverviewItem: React.FC<ProfileOverviewItemProps & WithChildren> = (props) => {
    const {
        label,
        children
    } = props

    if(!children) return null;

    return (
        <div className="row fs-6 px-3 pb-3">
            <div className="col-md-6 text-label">{label}</div>
            <div className="col-md-6 text-label">{children}</div>
        </div>
    )
}