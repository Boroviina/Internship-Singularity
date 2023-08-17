import React from "react";
import {ProfileOverviewItem} from "./ProfileOverviewItem";
import {Language} from "../../../shared/enums/languages.enum";
import {UserModel} from "../../../shared/models/user.model";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

type ProfileOverviewProps = {
    user: UserModel
}

export const ProfileOverview: React.FC<ProfileOverviewProps> = (props) => {
    const {
        user
    } = props

    return (
        <>
            <div className="mx-auto shadow-lg rounded overflow-hidden pt-3 mb-3 border bg-body">
                    <div className="fs-4 border-bottom p-3 fw-bold mb-3 text-label">User details</div>
                    <ProfileOverviewItem label='Full name'>{user.name}</ProfileOverviewItem>
                    <ProfileOverviewItem label='Email'>
                        {user.email}{' '}
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>{user.isEmailVerified ? 'Email is verified' : 'Email is not verified'}</Tooltip>}
                        >
                            <i className={`bi ${user.isEmailVerified ? 'bi-check-circle text-success' : 'bi-exclamation-circle text-danger'}`}/>
                        </OverlayTrigger>
                    </ProfileOverviewItem>
                    <ProfileOverviewItem label='Role'>{user.role}</ProfileOverviewItem>
                    <ProfileOverviewItem label='Contact phone'>{user.phone}</ProfileOverviewItem>
                    {user.birthDate && <ProfileOverviewItem
                        label='Date of birth'>{(new Date(user.birthDate)).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</ProfileOverviewItem>}
                    <ProfileOverviewItem label='Gender'>{user.gender}</ProfileOverviewItem>
                    <ProfileOverviewItem label='Country'>{user.country}</ProfileOverviewItem>
                    <ProfileOverviewItem label='Occupation'>{user.occupation}</ProfileOverviewItem>
                    <ProfileOverviewItem label='Language'>{Language[user.language]}</ProfileOverviewItem>
                    <ProfileOverviewItem label='Website'>{user.website}</ProfileOverviewItem>
            </div>
        </>
    )
}