import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { actions } from '../../actions/common'

function BookInSelection (props) {
    const { bookId, selectionId } = props
    const dispatch = useDispatch()
    const books = useSelector(state => state.books)
    const book = books.find(el => el._id === bookId)
    return (
        <div className="selection_list_item">
            <span><strong>{book?.title}</strong> by {book?.author}</span>
            <Button
                onClick={() => dispatch(actions.removeBookFromSelection(bookId, selectionId))}
                variant="outline-danger">Delete</Button>
        </div>
    )
}

export default BookInSelection
