import React, {useState} from "react";

const ThemeContext = React.createContext({
    theme: 'light',
    setTheme: () => {
    }
})

export const ThemeContextProvide = (props) => {
    const [theme, setTheme] = useState('light');
    const setThemeHandler = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };

    return <ThemeContext.Provider value={{theme: theme, setTheme: setThemeHandler}}>
        <div data-bs-theme={theme}>
            {props.children}
        </div>
    </ThemeContext.Provider>
}
export default ThemeContext;