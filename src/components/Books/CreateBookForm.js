import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { isStringEmpty, isObjectEmpty } from '../../utils/utils'
import { ErrorContext } from '../../context/ErrorContext'
import { actions } from '../../actions/common'

function CreateBookForm () {
    const dispatch = useDispatch()
    const [bookName, setBookName] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [errors, setErrors] = useState({})
    const errorCtx = useContext(ErrorContext)
    const onSubmit = async () => {
        const errors = {}
        if (isStringEmpty(bookName)) {
            errors.bookName = 'required'
        }
        if (isStringEmpty(bookAuthor)) {
            errors.bookAuthor = 'required'
        }
        if (isObjectEmpty(errors)) {
            dispatch(actions.createBook({
                title: bookName,
                author: bookAuthor
            }))
            setBookName('')
            setBookAuthor('')
            setErrors({})
        } else {
            setErrors(errors)
            errorCtx.addError('ОШИБКА ОЧЕНЬ СИЛЬНАЯ')
        }
    }
    return (
        <div className="create_book_form_wrapper">
            <form className="create_book_form row" onSubmit={e => { e.preventDefault(); onSubmit() }}>
                <div className="create_book_input col-md-6" >
                    <label htmlFor="bookName" className="form-label">Book Title</label>
                    <input type="text" className="form-control" id="bookName" value={bookName}
                        onChange={e => setBookName(e.target.value)} />
                    {errors.bookName && <span className="form_error">This field is required</span>}
                </div>
                <div className="create_book_input col-md-6">
                    <label htmlFor="bookAuthor" className="form-label">Book Author</label>
                    <input type="text" className="form-control" id="bookAuthor" value={bookAuthor}
                        onChange={e => setBookAuthor(e.target.value)} />
                    {errors.bookAuthor && <span className="form_error">This field is required</span>}
                </div>
                <div className="create_book_form_add_btn_wrapper">
                    <button type="submit" className="btn btn-primary">Create book</button>
                </div>
            </form>
        </div>
    )
}

export default CreateBookForm
