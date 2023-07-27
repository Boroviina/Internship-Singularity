import React from "react";
import {HeaderCard} from "../../shared/components/HeaderCard";
import {CustomCard} from "../../shared/components/layout/CustomCard";

export const ProfileOverview = () => {

    return (
        <>
            <CustomCard width="96%">
                <HeaderCard title="Overview" className="mt-5">Overview of users information</HeaderCard>
            </CustomCard>
        </>
)
}