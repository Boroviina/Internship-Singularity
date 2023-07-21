import React from 'react';
import {FilterGroup} from "./CheckboxGroup";

const Dropdown = ({name, filters}: FilterGroup) => {
    return (
        <div>
            <h5>{name}</h5>
            <select className="form-select form-select-lg" aria-label={name}>
                {filters.map((filter) => {
                return <option value={filter}>{filter}</option>;
                })}
            </select>
        </div>
    );
};

export default Dropdown;