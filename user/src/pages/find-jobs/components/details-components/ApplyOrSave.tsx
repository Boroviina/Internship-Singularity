import React from 'react';
import generalBtn from "../../../Home/GeneralButton.module.css";

const ApplyOrSave = () => {
    return (
        <>
            <button type="button" className={`${generalBtn.filledButton} ${generalBtn.smallBtn}`}>
                Apply
            </button>
            <button type="button" className={`${generalBtn.lightButton} ${generalBtn.smallBtn}`}>
                Save
            </button>
        </>
    );
};

export default ApplyOrSave;