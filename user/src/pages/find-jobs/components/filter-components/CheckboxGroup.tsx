import React, {useEffect, useState} from 'react';
import Checkbox from "./Checkbox";
import {FilterProperties} from "./JobFilters";

export interface Filter <T extends FilterProperties>{
    filterInfo: T;
    updateFilters(filters: any[], filterName: string);
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
    // zbog ovoga je potrebno refaktorisati da bude enum. ali ne moze enum, jer oni ne funkcionisu tako.
    useEffect(() => updateFilters(selectedItems, filterInfo.nameInJob), [selectedItems]);

    return (
        <div>
            <h5>{filterInfo.displayName}</h5>
            {filterInfo.values.map((filter) => {
                return <Checkbox key={filter}
                                 name={filter}
                                 id={filter.toLowerCase().replaceAll(" ", "")}
                                 onChange={handleSelectionChanged}/>;
            })}
        </div>
    );
};

export default CheckboxGroup;