import React, {useState} from 'react';

const SearchBar = ({search}) => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onLocationChanged = (e) => setLocation(e.target.value);

    const submit = () => search(title, location);

    return (
        <div className="input-group input-group-lg d-flex flex-column flex-sm-row flex-nowrap mt-4">
            <div className="form-floating w-auto">
                <input type="text" className="form-control fs-6" id="keywordSearch"
                       placeholder="Job title" aria-label="Search by title" value={title} onChange={onTitleChanged}/>
                <label htmlFor="keywordSearch">Job title</label>
            </div>
            <div className="form-floating w-auto">
                <input type="text" className="form-control fs-6" id="locationSearch"
                       placeholder="Address, city or country" aria-label="Location search" value={location} onChange={onLocationChanged}/>
                <label htmlFor="locationSearch">Country, city or region</label>
            </div>
            <button className={'btn btn-pink d-inline-block overflow-visible'} onClick={submit}>Search</button>
        </div>
    );
};

export default SearchBar;