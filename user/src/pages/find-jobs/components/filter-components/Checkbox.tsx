import React, {useEffect, useState} from 'react';

interface FilterItem {
    name: string;
    id: string;
    onChange(item: string, selected: boolean): void;
}

const Checkbox = ({name, id, onChange}: FilterItem) => {
    const [checked, setChecked] = useState(false);
    const onSelect = () => setChecked(!checked);

    useEffect(() => onChange(name, checked), [checked]);

    return (
        <div className="form-check d-flex align-items-center">
            <input className="form-check-input check flex-shrink-0" type="checkbox" id={id}
                   value={name} onChange={onSelect} checked={checked} />
            <label style={{userSelect: "none"}} className="form-check-label fs-5 ms-2 text-label" htmlFor={id}>
                {name}
            </label>
        </div>
    );
};

export default Checkbox;