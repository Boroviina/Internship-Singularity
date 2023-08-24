import React from "react";
import {KTSVG} from "../../../_metronic/helpers";

export function DownloadButton(props) {

    const handleDownload = async () => {
        try {
            console.log("This is json body",props.filename);

            const filename = props.filename.filename;
            const filePath=`../../../../backend/public/uploads/${filename}`;
            console.log("This is filepath",filePath);

            const response=await  fetch(filePath);
            console.log("This is response",response);


            const buffer=await response.arrayBuffer();
            console.log("this is buffer", buffer);

            // const blob = new Blob([buffer], {type:props.filename.mimetype});
            // console.log("Blob", blob);

            const file=new File([buffer], props.filename.originalname,{type: props.filename.mimetype});
            console.log("File:", file);

            const url = window.URL.createObjectURL(file);
            console.log("This is url: ", url);

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