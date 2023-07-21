import React from "react";
import {Header} from "../Header/Header";
import {Footer} from "../generalFooter/Footer";
import {HomeBody} from "./HomeBody";

export function Home() {
    return (
        <>
            <Header/>
            <HomeBody/>
            <Footer/>
        </>
    )
}