import React from "react";

export function MenuItem(props) {

    return <li className="btn mx-3 text-decoration-none btn-link btn-block m-0 p-2 text-start text-dark">
        <a
            href={props.reference}
            className={`text-decoration-none fs-6 fw-bolder nav-link`}>{props.title}</a>
    </li>
}