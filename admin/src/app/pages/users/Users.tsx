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

    let content = <Alert state="primary" icon="icons/duotune/general/gen021.svg">No users</Alert>;

    if (users) {
        const currentUsers = users.map(user => (
            <UserItem key={user.id} user={user}/>
        ));
        content = <div>{currentUsers}</div>;
    }

    return (
        <>
            <div className={`w-lg-1024px bg-body rounded shadow-sm p-5 p-lg-10 mx-auto fade-in-up`}>
                <h1>User list</h1>
            {content}
            </div>
        </>
    );
}