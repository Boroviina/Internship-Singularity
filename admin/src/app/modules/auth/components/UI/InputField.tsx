import React from 'react';

const InputField = (props) => {
    return (
        <>
            <label className='form-label fw-bolder text-dark fs-6'>{props.name}</label>
            <input
                placeholder={props.placeholder}
                type={props.type}
                autoComplete='off'
                className='form-control form-control-lg form-control-solid'
            />
        </>
    );
};

export default InputField;