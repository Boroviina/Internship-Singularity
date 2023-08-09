import React, {useEffect, useState} from "react";
import {KTSVG} from "../../../_metronic/helpers";
import {getFilteredUsersWithPages} from "../../shared/services/user.service";
import {UserItem} from "./UserItem";
import CustomModal from "../../shared/components/CustomModal";
import {Pagination} from "../../shared/components/Pagination";
import {CustomDropdown} from "../../shared/components/CustomDropdown";
import {FilterUsers} from "./FilterUsers";
import {AddUser} from "./AddUser";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [roleFilter, setRoleFilter] = useState('');
    const [activeFilter, setActiveFilter] = useState('');

    const fetchUsers = async () => {
        try {
            const response = await getFilteredUsersWithPages(page, {role: roleFilter, active: activeFilter});
            const {results, totalPages} = response;
            setUsers(results);
            setTotalPages(totalPages);
        } catch(error) {
            console.log("Error while getting users.");
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [page, newUser, roleFilter, activeFilter]);

    const hideModal = () => {
        setShowModal(false);
    }
    const openModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                <div className="fs-1 d-none d-sm-block">Users list</div>
                <div className="d-flex flex-row">
                    <CustomDropdown options={[
                        { content:  <FilterUsers setRoleFilter={setRoleFilter} setActiveFilter={setActiveFilter} setPage={setPage}/>},
                    ]}></CustomDropdown>
                    <button className="btn btn-light-primary ms-2" onClick={openModal}><KTSVG path="/media/icons/duotune/abstract/abs011.svg" className="svg-icon-muted svg-icon" />Add user</button>
                </div>
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
                        {users && users.map(user => (<UserItem key={user.id} user={user} updateUsers={fetchUsers}></UserItem>))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Pagination
                page={page}
                totalPages={totalPages}
                onPageChange={newPage => setPage(newPage)}
            />

            <CustomModal
                title="Add user"
                show={showModal}
                onHide={hideModal}
            >
                <AddUser setNewUser={setNewUser} hideModal={hideModal}/>
            </CustomModal>
        </>
    );
}