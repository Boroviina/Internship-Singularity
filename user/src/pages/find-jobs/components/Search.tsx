import React, {useState} from 'react';
import SearchBar from "./SearchBar";


const Search = ({search}) => {
    return (
        <div className="container">
            <h1 className='display-2 text-light' style={{paddingTop: '150px'}}>
                Search for jobs
            </h1>
            <SearchBar search={search}/>
        </div>
    );
};

export default Search;