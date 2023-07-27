import React from "react";
import {WithChildren} from "../../helpers";

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
        <div className="row fs-6 px-3 pb-3" style={{color: '#010b1d'}}>
            <div className="col-md-6">{label}</div>
            <div className="col-md-6">{children}</div>
        </div>
    )
}