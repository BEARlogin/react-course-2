import { useContext, createElement } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import cn from 'classnames'
import styles from './styles.module.css'

export const Typography = ({ tag, children, className, ...props }) => {
    const { theme } = useContext(ThemeContext)
    return createElement(tag, { ...props, className: cn(className, styles[`${tag}-${theme}`]) }, children)
}
