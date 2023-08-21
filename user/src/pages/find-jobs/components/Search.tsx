import React, {useState} from 'react';


const Search = ({search}) => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");

    const onTitleChanged = (e) => {
        setTitle(e.target.value);
    };

    const onLocationChanged = (e) => {
        setLocation(e.target.value);
    };

    const submit = () => {
        let searchString = "";
        if(title) {
            searchString += "&searchTitle=" + title;
        }
        if(location) {
            searchString += "&searchLocation=" + location;
        }
        search(searchString);
    };

    return (
        <div className="container">
            <h1 className='display-2 text-light' style={{paddingTop: '150px'}}>
                Search for jobs
            </h1>
            <div className="input-group input-group-lg d-flex flex-column flex-sm-row flex-nowrap mt-4">
                <div className="form-floating w-auto">
                    <input type="text" className="form-control fs-6" id="keywordSearch"
                           placeholder="Job title or keywords" aria-label="Keyword search" value={title} onChange={onTitleChanged}/>
                    <label htmlFor="keywordSearch">Job title</label>
                </div>
                <div className="form-floating w-auto">
                    <input type="text" className="form-control fs-6" id="locationSearch"
                           placeholder="Address, city or country" aria-label="Location search" value={location} onChange={onLocationChanged}/>
                    <label htmlFor="locationSearch">Country, city or region</label>
                </div>
                <button className={'btn btn-pink d-inline-block overflow-visible'} onClick={submit}>Search</button>
            </div>
        </div>
    );
};

export default Search;