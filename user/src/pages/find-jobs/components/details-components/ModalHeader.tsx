import React from 'react';
import logo from "../../img/logo-fb.jpg";
import styles from "./Details.module.css";

interface HeaderProps {
    companyName: string;
    jobTitle: string;
    pay?: string;
}

const ModalHeader = ({companyName, jobTitle, pay}: HeaderProps) => {
    return (
        <header className={`d-flex flex-column align-items-center`}>
            <img src={logo} className={`${styles.logo}`} alt={"Company Logo"}/>
            <h3 className={`mb-1 ${styles.companyName}`}>{companyName}</h3>

            <div className={`d-flex flex-column flex-lg-row justify-content-between align-items-center text-center`}>
                <div className="fs-3 fw-bold">{jobTitle}</div>
                <div className={`mx-2 fs-3 fw-bold d-none d-lg-block`}>-</div>
                {pay && <div className="fs-3 fw-bold text-nowrap flex-wrap text-success">{pay}</div>}
            </div>
        </header>
    );
};

export default ModalHeader;