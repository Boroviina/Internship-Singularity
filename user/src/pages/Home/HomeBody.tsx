import React from "react";
import {CarouselCustom} from "./Carousel/CarouselCustom";
import {SearchJob} from "./SearchJob/SearchJob";

export function HomeBody() {
    return <div className={'mt-1 card'}>
        {/*<div className={'position-relative d-block'}>*/}
        {/*    <div className={'position-relative d-block overflow-hidden m-0 p-0'}>*/}
        {/*        <div className={'position-relative top-0 d-block mx-auto opacity-25 '}*/}
        {/*             style={{width: `1850px`, left: `0`}}>*/}
        {/*carousel*/}

       <CarouselCustom/>
         <SearchJob/>
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}

    </div>

}