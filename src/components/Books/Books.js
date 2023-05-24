import Book from './Book'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { actions } from '../../actions/common'

function Books () {
    const books = useSelector(state => state.books)
    const dispatch = useDispatch()

    const handleDelete = useCallback(
        (evt) => {
            const bookId = evt.target.dataset.id
            dispatch(actions.removeBook(bookId))
        }, [dispatch]
    )

    const refreshBooks = () => {
        dispatch(actions.fetchBooks())
    }

    return (
        <>
            <ul className="list-group books-list">
                {books.map((book) =>
                    <Book key={book._id} item={book} onDelete={handleDelete} />
                )}
            </ul>
            <div className='mt-3'>
                <button type="button" className="btn btn-primary" onClick={refreshBooks}>Refresh books</button>
            </div>
        </>
    )
}

export default Books
