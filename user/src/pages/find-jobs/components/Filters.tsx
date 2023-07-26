import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons/faFilter";
import styles from "../JobListingPage.module.css";

const Filters = ({children}) => {
    return (
        <>
            <div className="align-items-center mb-2">
                <FontAwesomeIcon icon={faFilter}
                                 style={{color: "#fb246a", height: 30}}/>
                <h5 className="d-inline align-baseline">Filter jobs</h5>
            </div>
            <div className={`container d-flex flex-column gap-3 p-3 filter ${styles.filter}`}>
                {children}
            </div>
        </>
    );
};

export default Filters;