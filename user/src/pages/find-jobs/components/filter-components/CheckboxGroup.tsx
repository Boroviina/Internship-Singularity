import React, {useEffect, useState} from 'react';
import Checkbox from "./Checkbox";

export interface Filter {
    name?: string,
    values?: string[],
    updateFilters(filters: any[]): void,
}

const CheckboxGroup = ({name, values, updateFilters}: Filter) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelectionChanged = (item: string, checked: boolean) => {
        if(checked && !selectedItems.includes(item)) {
            setSelectedItems([...selectedItems, item]);
        } else {
            const itemsWithoutItem = selectedItems.filter(el => el !== item);
            setSelectedItems(itemsWithoutItem);
        }
    };

    useEffect(() => updateFilters(selectedItems), [selectedItems]);

    return (
        <div>
            <h5>{name}</h5>
            {values.map((filter) => {
                return <Checkbox key={filter}
                                 name={filter}
                                 id={filter.toLowerCase().replaceAll(" ", "")}
                                 onChange={handleSelectionChanged}/>;
            })}
        </div>
    );
};

export default CheckboxGroup;