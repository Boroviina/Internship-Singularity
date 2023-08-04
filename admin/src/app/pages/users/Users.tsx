import React, {useEffect, useState} from "react";
import {getUsers} from "../../shared/services/user.service";
import {Alert} from "../../shared/components/Alert";
import {UserItem} from "./UserItem";

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchJobListings = async () => {

            try {
                const userList = await getUsers();
                setUsers(userList);
            } catch(error) {
                console.log("Error while getting job listings.");
            }
        }
        fetchJobListings();
    }, []);

    const alert = <Alert state="primary" icon="icons/duotune/general/gen021.svg">No users</Alert>;

    return (
        <>
            <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                <div className="fs-1">User list</div>
                <button className="btn btn-active-light-primary">Create user</button>
            </div>
            <div className={`w-lg-1024px bg-body rounded shadow-sm p-5 p-lg-5 mx-auto fade-in-up`}>
                <div className="table-responsive">
                    <table className="table gs-4 gy-4 gx-4 mb-0">
                        <thead>
                        <tr className="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
                            <th>User</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users && users.map(user => (<UserItem key={user.id} user={user}></UserItem>))}
                        </tbody>
                    </table>
                </div>



            </div>
        </>
    );
}