import React from 'react';
import styles from './JobListing.module.css';
import generalBtn from "./../../Home/GeneralButton.module.css"

const logo = require('../img/logo-fb.jpg');

interface JobProps {
    showDetails(): void;
}

const JobListing = ({showDetails} : JobProps) => {
    return (
        <article className={`d-flex justify-content-between flex-column flex-sm-row w-100 p-3 ${styles.jobCard}`}>
            <div className="d-flex align-items-center">
                <a className="me-3" href="#">
                    <img src={logo} className={`${styles.logo}`}
                         style={{height: "4rem"}}
                         alt={"Company Logo"}/>
                </a>
                <div onClick={showDetails} className={`${styles.titleAndDetails} flex-grow-1`}>
                        <h4 className={`${styles.title}`}>Frontend developer</h4>
                    <div className="fw-semibold">
                        <span>Facebook</span>
                        <span className="text-black-50">
                            . Los Angeles . 50$ - 75$ . Part time . About a week ago
                        </span>
                        <button type="button" className={`${generalBtn.lightButton} ${generalBtn.tinyBtn}`}>
                            Details
                        </button>
                    </div>
                </div>
            </div>
            <div className={`d-flex align-items-center gap-2 mt-2 mt-sm-0 ${styles.alignedButtons}`}>
                <button type="button" className={`${generalBtn.filledButton} ${generalBtn.smallBtn}`}>
                    Apply
                </button>
                <button type="button" className={`${generalBtn.lightButton} ${generalBtn.smallBtn}`}>
                    Save
                </button>
            </div>
        </article>
    );
};

export default JobListing;