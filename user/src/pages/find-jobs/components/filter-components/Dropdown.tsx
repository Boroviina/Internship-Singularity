import React, {useEffect, useState} from 'react';
import {Filter} from "./CheckboxGroup";

const Dropdown = ({filterInfo, updateFilters}: Filter<any>) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const handleChange = (e) => {
        if(e.target.value) {
            setSelectedItems([e.target.value]);
        } else {
            setSelectedItems([]);
        }
    };

    useEffect(() => updateFilters(selectedItems, filterInfo.nameInJob), [selectedItems]);


    return (
        <div>
            <h5>{filterInfo.displayName}</h5>
            <select className="form-select form-select-lg" aria-label={filterInfo.displayName} onChange={handleChange}>
                <option value="" selected>...</option>
                {filterInfo.values.map((item) => {
                    return <option value={item} key={item}>{item}</option>;
                })}
            </select>
        </div>
    );
};

export default Dropdown;