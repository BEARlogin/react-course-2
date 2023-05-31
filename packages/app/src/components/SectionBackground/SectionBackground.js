import { useContext, createElement } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const SectionBackground = ({ tag = 'div', children, className, themeColorsMap = {}, ...props }) => {
    const { theme } = useContext(ThemeContext)
    const stylesObj = { background: themeColorsMap[theme] }

    return createElement(tag, { ...props, className, style: stylesObj }, children)
}
