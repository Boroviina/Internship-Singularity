import React from "react";
import {KTSVG} from "../../../_metronic/helpers";

export function DownloadButton(props) {

    const handleDownload = async () => {
        try {
            const filename = props.filename.filename;
            const filePath=`/uploads/${filename}`;

            const response=await  fetch(filePath);
            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = props.filename.originalname;

            document.body.appendChild(link);
            link.click();

            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);

        } catch (error) {
            console.error('Error downloading file:', error);
        }
    }

    return <button onClick={handleDownload} className={'btn btn-light-dark m-1'}>
        <KTSVG path={props.icon}
               className={'svg-icon svg-icon-2x  svg-icon-'}/>{props.name}
    </button>
}