import Book from './Book'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useContext, useEffect } from 'react'
import { actions } from '../../actions/common'
import { ErrorContext } from '../../context/ErrorContext'

function Books () {
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
    const refreshCaption = fetchingBooks ? 'Cancel fetch books' : 'Refresh books'
    const onClick = fetchingBooks ? cancelFetchBooks : refreshBooks

    useEffect(() => {
        if (requestIsTimedOut === true) {
            dispatch(actions.requestIsTimedOut(false))
            errorCtx.addError('Слишком долгий запрос списка книг')
        }
    }, [requestIsTimedOut])

    return (
        <>
            <ul className="list-group books-list">
                {books.map((book) =>
                    <Book key={book._id} item={book} onDelete={handleDelete} />
                )}
            </ul>
            <div className='mt-3'>
                <button type="button" className="btn btn-primary" onClick={onClick}>{refreshCaption}</button>
            </div>
        </>
    )
}

export default Books
