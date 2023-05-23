import { useDispatch } from 'react-redux'
import { useCallback, useState, memo } from 'react'
import { addBookToSelection } from '../../actions/selection-actions'
import { showError } from '../../actions/error-actions'

import BookSelect from './BookSelect'
import SelectionSelect from './SelectionSelect'

function AddBookToSelectionForm () {
    const dispatch = useDispatch()
    const [bookId, setBookId] = useState('')
    const [selectionId, setSelectionId] = useState('')

    const onSubmit = () => {
        if (bookId && selectionId) {
            dispatch(addBookToSelection(bookId, selectionId))
        } else {
            dispatch(showError('Please select book and selection'))
        }
    }

    const handleBookSelect = useCallback((evt) => {
        setBookId(evt.target.value)
    }, [])

    const handleSelectionSelect = useCallback((evt) => {
        setSelectionId(evt.target.value)
    }, [])

    return (
        <form onSubmit={e => { e.preventDefault(); onSubmit() }} className="selection_control_wrap">
            <div className="row">
                <BookSelect onChange={handleBookSelect} />
                <SelectionSelect onChange={handleSelectionSelect} />

                <div className="col-md-1 d-flex align-items-end">
                    <button type="submit" className="btn btn-primary add-book-to-selection-button">Add</button>
                </div>
            </div>
        </form>
    )
}

export default memo(AddBookToSelectionForm)
