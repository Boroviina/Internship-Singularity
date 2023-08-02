import React from "react";
import {CarouselCustom} from "./Carousel/CarouselCustom";
import {SearchJob} from "./SearchJob/SearchJob";
import {ApplyProcess} from "./applyProcess/ApplyProcess";

export function HomeBody() {
    return <div className={'mt-1 '}>
       <CarouselCustom/>
         <SearchJob/>
        <ApplyProcess/>
    </div>

}