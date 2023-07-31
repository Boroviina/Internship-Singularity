import React from 'react';
import styles from './JobListing.module.css';
import generalBtn from "./../../Home/GeneralButton.module.css"

const logo = require('../img/logo-fb.jpg');

interface JobProps {
    showDetails(): void;
}

const  JobListing = ({showDetails} : JobProps) => {
    return (
        <article className={`d-flex justify-content-between flex-column flex-sm-row w-100 p-3 mb-1 card`}>
            <div className="d-flex align-items-center">
                <a className="me-3" href="#">
                    <img src={logo} className={`p-1`}
                         style={{height: "4rem"}}
                         alt={"Company Logo"}/>
                </a>
                <div onClick={showDetails} className={`pointer flex-grow-1`}>
                        <h4 className={`label`}>Frontend developer</h4>
                    <div className="fw-semibold">
                        <span>Facebook</span>
                        <span className="text-black-50">
                            . Los Angeles . 50$ - 75$ . Part time . About a week ago
                        </span>
                    </div>
                </div>
            </div>
            <div className={`d-flex align-items-center gap-2 mt-2 mt-sm-0 mx-3`}>
                <button type="button" className={`btn btn-pink`}>
                    Apply
                </button>
                <button type="button" className={`btn btn-white`}>
                    Save
                </button>
            </div>
        </article>
    );
};

export default JobListing;