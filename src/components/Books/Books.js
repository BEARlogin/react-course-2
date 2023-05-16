import { useSelector, useDispatch } from 'react-redux'
import {removeBook} from "../../actions/book-actions";

function Books() {
  const books = useSelector(state => state.books)
  const dispatch = useDispatch()

  return (
    <ul className="list-group books-list">
      {books.map((book,idx) =>
        <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
          <span><strong>{book.title}</strong> by {book.author}</span>
          <span className="pull-right">
              <button type="button" className="btn btn-outline-danger btn-sm"
                      onClick={()=>dispatch(removeBook(book._id))}>DELETE</button>
          </span>
        </li>
      )}
    </ul>
  )
}

export default Books
