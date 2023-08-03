import React from "react";
import {UserModel} from "../../shared/models/user.model";

type JUserItemProps = {
    user: UserModel
}

export const UserItem: React.FC<JUserItemProps> = (props) => {
    const {
        user
    } = props

    return (
        <div>
            {user.name}
        </div>
    )
}