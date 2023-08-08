import React from "react";
import {KTSVG} from "../../../_metronic/helpers";

export function DownloadButton(props) {

    const handleDownload = () => {
        fetch(`http://localhost:3000/download/${props.filename}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("File not found");
                }
                return response.blob();
            }).then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${props.filename}`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }).catch((error) => {
            console.error('Error downloading file: ', error);
        });
    }

    return <button onClick={handleDownload} className={'btn btn-light-dark m-1'}>
        <KTSVG path={props.icon}
               className={'svg-icon svg-icon-2x  svg-icon-'}/>{props.name}
    </button>
}