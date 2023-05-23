import { removeBook } from '../../actions/book-actions'
import Book from './Book'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'

function Books () {
    const books = useSelector(state => state.books)
    const dispatch = useDispatch()

    const handleDelete = useCallback(
        (evt) => {
            const bookId = evt.target.dataset.id
            dispatch(removeBook(bookId))
        }, [dispatch]
    )

    return (
        <ul className="list-group books-list">
            {books.map((book) =>
                <Book key={book._id} item={book} onDelete={handleDelete} />
            )}
        </ul>
    )
}

export default Books
