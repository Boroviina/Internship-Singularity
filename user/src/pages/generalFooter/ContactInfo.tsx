import React from "react";
import {InfoItem} from "./InfoItem";

export function ContactInfo(){
    return  <div className={'col-12 col-sm-5 '}>
        <a className={'  mb-3 btn btn-carrousel'} data-bs-toggle='collapse'
           href='#collapseContact'
           role={'button'} aria-expanded={'false'} aria-controls={'collapseContact'}>CONTACT
            INFO</a>
        <div className={'collapse'} id="collapseContact">
            <div className={'mx-4 d-flex flex-column'}>
                <InfoItem reference={"https://www.google.com/maps/place/Isto%C4%8Dno+Sarajevo/@43.8226316,18.3662468,18.75z/data=!4m6!3m5!1s0x4758c9bb85702121:0xfe263b34ee7c6729!8m2!3d43.8217132!4d18.3683774!16zL20vMGJ5bDV0?entry=ttu"}
                title={'Adress'} info={'Stefana Nemanje'}/>
                <InfoItem reference={"https://www.google.com/maps/place/Isto%C4%8Dno+Sarajevo/@43.85756,18.3506324,10z/data=!3m1!4b1!4m6!3m5!1s0x4758c9bb85702121:0xfe263b34ee7c6729!8m2!3d43.8217132!4d18.3683774!16zL20vMGJ5bDV0?entry=ttu"}
                title={'City'} info={'Istocno Sarajevo'}/>
                <InfoItem title={'Country'} info={'Bosna i Hercegovina'}/>
                <InfoItem title={'Postal Code'} info={'71123'}/>
                <InfoItem title={'Phone'} info={'057/557-256'}/>
                <InfoItem title={'E-mail'} info={'jobradar@gmail.com'} reference={'mailto:jobradar@gmail.com'}/>
                <div className={'d-flex justify-content-end'}>
                    <button className={`btn btn-pink w-50 my-4`} type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseContact"
                            aria-expanded="false" aria-controls="collapseContact">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
}