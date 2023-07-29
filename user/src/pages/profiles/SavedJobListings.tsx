import React from "react";
import {HeaderCard} from "../../shared/components/HeaderCard";
import {CustomCard} from "../../shared/components/layout/CustomCard";

export const SavedJobListings = () => {

    return (
        <>
            <CustomCard width="96%">
                <HeaderCard title="Saved listings" className="mt-5">Saved job listings</HeaderCard>
            </CustomCard>
        </>
    )
}