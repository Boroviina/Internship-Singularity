import React, {useEffect, useState} from 'react';
import {Filter} from "./CheckboxGroup";

const Dropdown = ({name, filterItems}: Filter) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const handleChange = (e) => setSelectedItem(e.target.value);

    return (
        <div>
            <h5>{name}</h5>
            <select className="form-select form-select-lg" aria-label={name} onChange={handleChange}>
                <option value="" selected>...</option>
                {filterItems.map((filter) => {
                    return <option value={filter} key={filter}>{filter}</option>;
                })}
            </select>
        </div>
    );
};

export default Dropdown;