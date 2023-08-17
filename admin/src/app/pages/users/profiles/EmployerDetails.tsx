import React from "react";
import {ProfileOverviewItem} from "./ProfileOverviewItem";
import {Employer} from "../../../shared/models/employer.model";

type EmployerDetailsProps = {
    userName: string
    employer: Employer
}

export const EmployerDetails: React.FC<EmployerDetailsProps> = (props) => {
    const {
        userName,
        employer
    } = props

    return (
        <>
            {employer && <div className="mx-auto shadow-lg rounded overflow-hidden pt-3 mb-3 border bg-body">
                <div className="fs-4 border-bottom p-3 fw-bold mb-3 text-label">{userName}'s company</div>
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