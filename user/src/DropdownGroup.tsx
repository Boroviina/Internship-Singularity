import React from 'react';
import {FilterGroup} from "./CheckboxGroup";
import {Dropdown} from "react-bootstrap";

const DropdownGroup = ({name, filters}: FilterGroup) => {
    return (
        <Dropdown>
            <h5>{name}</h5>
            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                {filters[0]}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {filters.map((filter) => {
                return <Dropdown.Item href="#" key={Math.random().toString()}>{filter}</Dropdown.Item>;
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropdownGroup;