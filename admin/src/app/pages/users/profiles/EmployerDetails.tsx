import React, {useEffect, useState} from "react";
import {ProfileOverviewItem} from "./ProfileOverviewItem";
import {UserModel} from "../../../shared/models/user.model";
import {Role} from "../../../shared/enums/roles.enum";
import {getEmployers} from "../../../shared/services/employer.service";

type EmployerDetailsProps = {
    user: UserModel
}

export const EmployerDetails: React.FC<EmployerDetailsProps> = (props) => {
    const {
        user
    } = props

    const [employer, setEmployer] = useState(null);

    useEffect(() => {
        const fetchEmployer = async () => {
            try {
                if(user.role === Role.employer) {
                    const results = await getEmployers(`${user.id}`);
                    if(results[0]) {
                        setEmployer(results[0])
                    }
                }
            } catch(error) {
                console.log(error);
            }
        }
        fetchEmployer()
    }, []);

    return (
        <>
            {employer && <div className="mx-auto shadow-lg rounded overflow-hidden pt-3 mb-3 border bg-body">
                <div className="fs-4 border-bottom p-3 fw-bold mb-3 text-label">{user.name}'s company</div>
                <ProfileOverviewItem label='Company name'>{employer.companyName}</ProfileOverviewItem>
                <ProfileOverviewItem label='Industry'>{employer.industry}</ProfileOverviewItem>
                <ProfileOverviewItem label='Number of employees'>{employer.numOfEmployees}</ProfileOverviewItem>
                <ProfileOverviewItem label='City'>{employer.city}</ProfileOverviewItem>
                <ProfileOverviewItem label='Address'>{employer.address}</ProfileOverviewItem>
                <ProfileOverviewItem label='Company email'>{employer.companyEmail}</ProfileOverviewItem>
                <ProfileOverviewItem label='Company phone'>{employer.phone}</ProfileOverviewItem>
                <ProfileOverviewItem label='Company fax'>{employer.fax}</ProfileOverviewItem>
                {employer.users.length > 0 && <ProfileOverviewItem label='Users'>{employer.users.map(user => user.name)}</ProfileOverviewItem>}
            </div>}
        </>
    )
}