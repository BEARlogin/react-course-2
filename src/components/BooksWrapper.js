import Books from './Books/Books'
import CreateBookForm from './Books/CreateBookForm'
import { Typography } from './Typography'
import { SectionBackground } from './SectionBackground'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const BooksWrapper = () => {
    const { themes } = useContext(ThemeContext)
    return (
        <SectionBackground className={'wrapper books_wrapper'} themeColorsMap={{ [themes.dark]: 'grey' }}>
            <Typography tag="h2" className="page_title">Books</Typography>

            <CreateBookForm/>
            <Books/>
        </SectionBackground>
    )
}
