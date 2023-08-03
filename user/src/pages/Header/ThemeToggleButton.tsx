import React from "react";

export function ThemeToggleButton(props) {
    return <div
        className={`d-flex form-check form-switch align-items-center mx-3 ${props.className}`}>
        <input className={'row form-check-input '} type={'checkbox'}
               checked={null}
               onChange={props.ctx.setTheme}/>
        <label className={'label mx-4'}
               htmlFor="">{props.ctx.theme === 'light' ? "Light Mode" : "Dark Mode"}</label>
    </div>
}