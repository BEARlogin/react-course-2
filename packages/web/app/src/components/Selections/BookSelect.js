import { useSelector } from 'react-redux'
import { forwardRef, memo } from 'react'

const BookSelect = forwardRef(({ onChange, ...props }, ref) => {
    const books = useSelector(state => state.books)
    return (<div className="selection_control_item col-md-4">
        <label htmlFor="bookSelect">Add book</label>
        <select
            className="form-select"
            id="bookSelect"
            {...props}
            ref={ref}
            onChange={onChange}
        >
            <option value="">Choose a book</option>
            {
                books?.map(
                    (el, i) =>
                        <option key={i} value={el._id}>{el.title} by {el.author}</option>
                )
            }
        </select>
    </div>
    )
})

BookSelect.displayName = 'BookSelect'
export default memo(BookSelect)
