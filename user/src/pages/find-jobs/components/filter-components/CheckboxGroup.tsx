import React, {useEffect, useState} from 'react';
import Checkbox from "./Checkbox";

export interface Filter {
    name: string,
    filterItems: string[]
    updateFilters?(filters: string[]): void;
}

const CheckboxGroup = ({name, filterItems}: Filter) => {
    const [items, setItems] = useState([]);

    const handleFilterItemChanged = (item: string, checked: boolean) => {
        if(checked && !items.includes(item)) {
            setItems([...items, item]);
        } else {
            const filterWithoutItem = items.filter(el => el !== item);
            setItems(filterWithoutItem);
        }
    };

    return (
        <div>
            <h5>{name}</h5>
            {filterItems.map((filter) => {
                return <Checkbox key={filter}
                                 name={filter}
                                 id={filter.toLowerCase().replaceAll(" ", "")}
                                 onChange={handleFilterItemChanged}/>;
            })}
        </div>
    );
};

export default CheckboxGroup;