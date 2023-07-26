import React from 'react';

const SortBy = ({categories}) => {
    return (
        <div className="sortBy">
            <h5>Sort by</h5>
            <select className="form-select" aria-label="sortBy">
                {categories.map((category) => {
                    return <option value={category}>{category}</option>;
                })}
            </select>
        </div>
    );
};

export default SortBy;