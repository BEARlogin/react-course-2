import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const ThemeSelector = () => {
    const { setTheme, themes, theme: curTheme } = useContext(ThemeContext)

    return (<div className="themeSelector">
        <fieldset className="themeSelector">
            <legend>Тема</legend>

            {Object.keys(themes).map((theme) => (
                <span key={theme}>
                    <input type="radio" id={`theme_${theme}`} name="theme" className="themeRadio" onChange={() => setTheme(theme)} checked={theme === curTheme}/>
                    <label htmlFor={`theme_${theme}`}>{theme}</label>
                </span>
            ))}
        </fieldset>
    </div>)
}
