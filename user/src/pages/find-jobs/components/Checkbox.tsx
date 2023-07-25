import React from 'react';

const Checkbox = ({name, id}) => {
    return (
        <div className="form-check d-flex align-items-center">
            <input className="form-check-input check flex-shrink-0" type="checkbox" id={id}
                   style={{width: "20px", height: "20px"}}/>
            <label className="form-check-label fs-5 ms-2" htmlFor={id}>
                {name}
            </label>
        </div>
    );
};

export default Checkbox;