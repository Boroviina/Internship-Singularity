import React, {useEffect, useState} from 'react';
import Checkbox from "./Checkbox";
import {MyFilter} from "./JobFilters";

export interface Filter <T extends MyFilter>{
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
    useEffect(() => {updateFilters(selectedItems, filterInfo.propName)
        console.log("Filtered info", filterInfo)}, [selectedItems]);

    return (
        <div>
            <h5 className="text-label">{filterInfo.displayName}</h5>
            {filterInfo.values.map((item) => {
                return <Checkbox key={item}
                                 name={item}
                                 id={item}
                                 onChange={handleSelectionChanged}/>;
            })}
        </div>
    );
};

export default CheckboxGroup;