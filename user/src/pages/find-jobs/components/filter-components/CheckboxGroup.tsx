import React, {useState} from 'react';
import Checkbox from "./Checkbox";

export interface FilterGroup {
    name: string,
    filters: string[]
}

const CheckboxGroup = ({name, filters}: FilterGroup) => {
    const [currentFilters, updateFilters] = useState([]);
    const handleFilterItemChanged = (item: string, checked: boolean) => {
        if(checked && !currentFilters.includes(item)) {
            updateFilters([...currentFilters, item]);
        } else {
            const filterWithoutItem = currentFilters.filter(el => el !== item);
            updateFilters(filterWithoutItem);
        }
    };
    return (
        <div>
            <h5>{name}</h5>
            {filters.map((filter) => {
                return <Checkbox key={filter}
                                 name={filter}
                                 id={filter.toLowerCase().replaceAll(" ", "")}
                                 onChange={handleFilterItemChanged}/>;
            })}
        </div>
    );
};

export default CheckboxGroup;