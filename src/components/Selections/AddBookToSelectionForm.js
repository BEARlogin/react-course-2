import {useSelector, useDispatch} from 'react-redux'
import {useState} from "react";
import {addBookToSelection} from "../../actions/selection-actions";
import {showError} from "../../actions/error-actions"

function AddBookToSelectionForm() {
  const books = useSelector(state => state.books)
  const selections = useSelector(state => state.selections)
  const dispatch = useDispatch()
  const [bookId, setBookId] = useState("")
  const [selectionId, setSelectionId] = useState("")

  const onSubmit = () => {
    if (bookId && selectionId) {
      dispatch(addBookToSelection(bookId, selectionId))
    } else {
      dispatch(showError("Please select book and selection"))
    }
  }

  return (
    <form  onSubmit={e=>{e.preventDefault(); onSubmit()}} className="selection_control_wrap">
      <div className="row">
        <div className="selection_control_item col-md-4">
          <label htmlFor="bookSelect">Add book</label>
          <select className="form-select" id="bookSelect"
                  onChange={e=>setBookId(e.target.value)}>
            <option value="">Choose a book</option>
              { books && books.map((el, i) =>
                  <option key={i} value={el._id}>{el.title} by {el.author}</option>)}
          </select>
        </div>

        <div className="selection_control_item col-md-5">
          <label htmlFor="selectionSelect">to selection</label>
          <select className="form-select" id="selectionSelect"
                  onChange={e=>setSelectionId(e.target.value)}>
            <option value="">Choose a selection</option>
            { selections.data && selections.data.map((el, i) =>
                <option key={i} value={el._id}>{el.title} by {el.author}</option>)}
          </select>
        </div>

        <div className="col-md-1 d-flex align-items-end">
          <button type="submit" className="btn btn-primary add-book-to-selection-button">Add</button>
        </div>
      </div>
    </form>
  )
}

export default AddBookToSelectionForm