import { createContext, useState } from 'react'

const themes = Object.freeze({
    light: 'light',
    dark: 'dark'
})

export const ThemeContext = createContext({
    theme: themes.light,
    setTheme: (theme) => {
        console.log('setTheme1() theme=', theme)
    },
    themes
})

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light)
    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                themes
            }}
        >{children}</ThemeContext.Provider>
    )
}
