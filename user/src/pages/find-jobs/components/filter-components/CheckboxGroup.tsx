import React from 'react';
import Checkbox from "./Checkbox";

export interface FilterGroup {
    name: string,
    filters: string[]
}

const CheckboxGroup = ({name, filters}: FilterGroup) => {
    return (
        <div>
            <h5>{name}</h5>
            {filters.map((filter) => {
                return <Checkbox key={Math.random().toString()}
                                 name={filter}
                                 id={filter.toLowerCase().replaceAll(" ", "")}/>;
            })}
        </div>
    );
};

export default CheckboxGroup;