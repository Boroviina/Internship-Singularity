import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { KTSVG } from '../../../_metronic/helpers';

type Option = {
    content: React.ReactNode;
    value?: string;
    onClick?: () => void
};

type CustomDropdownProps = {
    options: Option[];
};

export const CustomDropdown: React.FC<CustomDropdownProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Dropdown show={isOpen} onToggle={toggleDropdown}>
            <Dropdown.Toggle
                as={CustomButton}
                variant="light-primary"
                id="custom-dropdown-toggle"
            >
                <KTSVG
                    path="/media/icons/duotune/general/gen031.svg"
                    className="svg-icon-muted svg-icon"
                />
                Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {props.options.map((option, index) => (
                    // <Dropdown.Item key={index}>
                    <div key={index}>
                        {option.content}
                    </div>
                    // </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

const CustomButton = React.forwardRef<any, any>((props, ref) => {
    const { onClick } = props;
    return (
        <button
            ref={ref}
            className="btn btn-light-primary"
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {props.children}
        </button>
    );
});
