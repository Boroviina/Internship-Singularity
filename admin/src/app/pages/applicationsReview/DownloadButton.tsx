import React from "react";
import {KTSVG} from "../../../_metronic/helpers";

export function DownloadButton(props) {

    const handleDownload = async () => {
        try {
            const response = await fetch(`http://localhost:3000/download/${props.filename}`);

            if (!response.ok) {
                throw new Error("File not found");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = props.filename;
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    }

    return <button onClick={handleDownload} className={'btn btn-light-dark m-1'}>
        <KTSVG path={props.icon}
               className={'svg-icon svg-icon-2x  svg-icon-'}/>{props.name}
    </button>
}