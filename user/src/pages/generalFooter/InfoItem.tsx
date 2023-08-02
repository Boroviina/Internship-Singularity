import React from "react";

export function InfoItem(props){
    return <div className={'row d-flex flex-column flex-sm-row text-light'}>
        <label className={'my-1 label text-nowrap col-12 col-sm-6'}><b>{props.title}:</b></label>
        <label className={'my-1  text-nowrap col-12 col-sm-6'}> <a
            className={'text-decoration-none label'}
            target="_blank"
            href={props.reference}>{props.info}</a></label>
    </div>
}