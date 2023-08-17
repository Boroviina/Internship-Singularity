import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from "react-bootstrap/DropdownButton";

type Option = {
    label: string;
    onClick?: () => void
};

type CustomItemsDropdownProps = {
    options: Option[];
};

export const CustomItemsDropdown: React.FC<CustomItemsDropdownProps> = (props) => {
    return (
        <DropdownButton
            id={`dropdown-button-drop`}
            size="sm"
            variant="primary"
            title="Actions"
        >
            {props.options.map((option, index) => (
                <Dropdown.Item key={index} onClick={option.onClick}>{option.label}</Dropdown.Item>
            ))}
        </DropdownButton>
    );
};
