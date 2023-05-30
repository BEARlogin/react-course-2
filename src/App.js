import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import { ErrorProvider } from './context/ErrorContext'
import { ThemeSelector } from './components/ThemeSelector'
import { BooksWrapper } from './components/BooksWrapper'
import { SelectionsWrapper } from './components/SelectionsWrapper'
import { ErrorsList } from './components/ErrorsList/ErrorsList'
import { actions } from './actions/common'

function App () {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.fetchSelections())
    }, [dispatch])

    return (
        <ThemeProvider>
            <ErrorProvider>
                <ThemeSelector />
                <BooksWrapper />
                <SelectionsWrapper />
                <ErrorsList />
            </ErrorProvider>
        </ThemeProvider>
    )
}

export default App
