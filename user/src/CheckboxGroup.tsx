import React from 'react';
import Checkbox from "./Checkbox";

/*export*/ interface FilterGroup {
    name: string,
    filters: string[]
}

const CheckboxGroup = ({name, filters}: FilterGroup) => {
    return (
        <>
            <h5>{name}</h5>
            {filters.map((item) => {
                return <Checkbox name={item}
                                 key={Math.random().toString()}
                                 id={item.toLowerCase().replaceAll(" ", "")}/>;
            })}
        </>
    );
};

export default CheckboxGroup;