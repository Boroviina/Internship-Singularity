import React from 'react';

const logo = require('../img/logo-fb.jpg');

const Job = () => {
    return (
        <article className="d-flex w-100 p-3">
                <a className="me-3" href="#employer-info">
                    <img src={logo} style={{height: "3.5rem"}} alt={"company logo"}/>
                </a>
            <div className="d-flex flex-column flex-sm-row">
                <div className="flex-grow-1 me-3">
                    <h3>Job title</h3>
                    <p className="fw-semibold">
                        <span>Facebook </span>
                        <span className="text-black-50">
                            . Los Angeles . 50$ - 75$ . About a week ago (week ago) . Part time . Until the end of March
                        </span>
                    </p>
                </div>
            <div className="d-flex align-items-center gap-2">
                <button type="button" className="btn btn-primary">
                    Apply
                </button>
                <button type="button" className="btn btn-outline-primary">
                    Save
                </button>
            </div>
            </div>

        </article>
    );
};

export default Job;