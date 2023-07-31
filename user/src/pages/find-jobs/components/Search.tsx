import React from 'react';
import generalBtn from "../../Home/GeneralButton.module.css";

const Search = () => {
    return (
        <div className="container">
            <h1 className='display-2 text-light' style={{paddingTop: '150px'}}>
                Search for jobs
            </h1>
            <div className="input-group input-group-lg d-flex flex-column flex-sm-row flex-nowrap mt-4">
                <div className="form-floating w-auto">
                    <input type="text" className="form-control fs-6" id="keywordSearch"
                           placeholder="Job title or keywords" aria-label="Keyword search" />
                    <label htmlFor="keywordSearch">Job title or keywords</label>
                </div>
                <div className="form-floating w-auto">
                    <input type="text" className="form-control fs-6" id="locationSearch"
                           placeholder="Address, city or country" aria-label="Location search" />
                    <label htmlFor="locationSearch">Country, city or region</label>
                </div>
                <button className={'btn btn-pink d-inline-block overflow-visible'}>Search</button>
            </div>
        </div>
    );
};

export default Search;