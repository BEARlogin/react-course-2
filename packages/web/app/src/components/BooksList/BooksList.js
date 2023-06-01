import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useContext, useEffect } from 'react'
import { actions } from '../../actions/common'
import { ErrorContext } from '../../context/ErrorContext'

import { Books } from 'books'

function BooksList () {
    const books = useSelector(state => state.books)
    const fetchingBooks = useSelector(state => state.fetchingBooks)
    const requestIsTimedOut = useSelector(state => state.requestIsTimedOut)
    const dispatch = useDispatch()
    const errorCtx = useContext(ErrorContext)

    const handleDelete = useCallback(
        (evt) => {
            const bookId = evt.target.dataset.id
            dispatch(actions.removeBook(bookId))
        }, [dispatch]
    )

    const refreshBooks = () => {
        dispatch(actions.fetchBooks())
    }

    const cancelFetchBooks = () => {
        dispatch(actions.cancelFetchBooks())
    }

    useEffect(() => {
        if (requestIsTimedOut === true) {
            dispatch(actions.requestIsTimedOut(false))
            errorCtx.addError('Слишком долгий запрос списка книг')
        }
    }, [requestIsTimedOut])

    return (
        <Books refreshBooks={refreshBooks} books={books} fetchingBooks={fetchingBooks} cancelFetchBooks={cancelFetchBooks} handleDelete={handleDelete} />
    )
}

export default BooksList
