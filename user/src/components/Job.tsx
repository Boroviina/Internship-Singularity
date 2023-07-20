import React from 'react';

const logo = require('./logo-fb.jpg');

const Job = () => {
    return (
        <article className="d-flex p-3 flex-column flex-sm-row ">
            <div className="d-flex">
                <a href="#employer-info">
                    <img src={logo} style={{height: "3.5rem"}} alt={"company logo"}/>
                </a>
                <div className="ms-3 flex-grow-1">
                    <h3>Job title</h3>
                    <p className="fw-semibold">
                        <span>Facebook</span>
                        <span className="text-black-50">
                            . Los Angeles . 50$ - 75$ . About a week ago (week ago)  . Niska . 50$
                        </span>
                    </p>
                </div>
            </div>
            <div className="d-flex align-items-center gap-2" style={{marginLeft: "4.4rem"}}>
                <button type="button" className="btn btn-outline-primary">
                    Save
                </button>
                <button type="button" className="btn btn-primary">
                    Apply
                </button>
            </div>

        </article>
    );
};

export default Job;