import React, {useState, useEffect} from "react";

const ThemeContext = React.createContext({
    theme: 'light',
    setTheme: () => {
    }
})

export const ThemeContextProvide = (props) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);
    const setThemeHandler = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);

        localStorage.setItem('theme', newTheme);
    };


    return <ThemeContext.Provider value={{theme: theme, setTheme: setThemeHandler}}>
        <div data-bs-theme={theme}>
            {props.children}
        </div>
    </ThemeContext.Provider>
}
export default ThemeContext;