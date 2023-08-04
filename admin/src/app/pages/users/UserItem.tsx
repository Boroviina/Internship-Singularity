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
        <tr className="fw-semibold text-gray-800 align-middle">
            <td>{user.name}</td>
            <td>{user.role}</td>
            {user.active ?
                <td><span className="badge badge-light-success">active</span></td> :
                <td><span className="badge badge-light-danger">not active</span></td> }
            <td>
                <button className="btn btn-active-light-primary">edit</button>
                <button className="btn btn-active-light-primary">delete</button>
                {user.active ?
                    <button className="btn btn-active-light-danger">deactivate</button> :
                    <button className="btn btn-active-light-success">activate</button>}
            </td>
        </tr>
    )
}