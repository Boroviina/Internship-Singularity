import React from "react";
import {Header} from "../Header/Header";
import {Footer} from "../generalFooter/Footer";
import {HeaderCard} from "../../shared/components/HeaderCard";
import {CustomCard} from "../../shared/components/layout/CustomCard";

export const ProfileSettings = () => {

    return (
        <>
            <Header/>
            <CustomCard width="96%">
                <HeaderCard title="Settings">Basic settings of your account</HeaderCard>
                <div className={`row row-cols-md-2`}>
                    <div className="col">
                        <HeaderCard title="Basic information" className="mt-4 mb-4">
                        </HeaderCard>
                    </div>
                </div>
            </CustomCard>
            <Footer/>
        </>
    )
}