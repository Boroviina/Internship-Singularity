import React, {useEffect, useState} from 'react';
import {Filter} from "./CheckboxGroup";

const Dropdown = ({name, values, updateFilters}: Filter) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const handleChange = (e) => {
        if(e.target.value) {
            setSelectedItems([e.target.value]);
        } else {
            setSelectedItems([]);
        }
    };

    useEffect(() => {updateFilters(selectedItems); console.log(selectedItems);}, [selectedItems]);


    return (
        <div>
            <h5>{name}</h5>
            <select className="form-select form-select-lg" aria-label={name} onChange={handleChange}>
                <option value="" selected>...</option>
                {values.map((filter) => {
                    return <option value={filter} key={filter}>{filter}</option>;
                })}
            </select>
        </div>
    );
};

export default Dropdown;