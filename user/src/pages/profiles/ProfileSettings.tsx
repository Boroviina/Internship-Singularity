import React from "react";
import {HeaderCard} from "../../shared/components/HeaderCard";
import {CustomCard} from "../../shared/components/layout/CustomCard";

export const ProfileSettings = () => {

    return (
        <>
            <CustomCard width="96%">
                <HeaderCard title="Settings" className="mt-5">Basic settings of your account</HeaderCard>
            </CustomCard>
        </>
    )
}