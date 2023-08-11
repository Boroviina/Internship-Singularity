import React, {useEffect, useState} from 'react';
import Checkbox from "./Checkbox";
import {FilterProperties} from "./JobFilters";

export interface Filter <T extends FilterProperties>{
    filterInfo: T;
    updateFilters(filter: any[], filterName: string);
}

const CheckboxGroup = ({filterInfo, updateFilters}: Filter<any>) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelectionChanged = (item: string, checked: boolean) => {
        if(checked && !selectedItems.includes(item)) {
            setSelectedItems([...selectedItems, item]);
        } else {
            const itemsWithoutItem = selectedItems.filter(el => el !== item);
            setSelectedItems(itemsWithoutItem);
        }
    };
    useEffect(() => updateFilters(selectedItems, filterInfo.nameInJob), [selectedItems]);

    return (
        <div>
            <h5>{filterInfo.displayName}</h5>
            {filterInfo.values.map((item) => {
                return <Checkbox key={item}
                                 name={item}
                                 id={item.toLowerCase().replaceAll(" ", "")}
                                 onChange={handleSelectionChanged}/>;
            })}
        </div>
    );
};

export default CheckboxGroup;