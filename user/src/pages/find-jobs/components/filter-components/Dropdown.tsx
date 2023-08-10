import React, {useEffect, useState} from 'react';
import {Filter} from "./CheckboxGroup";

const Dropdown = ({name, values}: Filter) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const handleChange = (e) => setSelectedItem(e.target.value);

    // FOR TESTING!
    // useEffect(() => {
    //     console.log(selectedItem)
    // }, [selectedItem]);

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