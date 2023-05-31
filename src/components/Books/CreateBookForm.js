import React from 'react'
import { useDispatch } from 'react-redux'
import { isStringEmpty } from '../../utils/utils'
import { actions } from '../../actions/common'
import { withFormik } from 'formik'

const SimpleCreateBookForm = ({ values, errors, touched, handleChange, handleSubmit }) => {
    return (
        <div className="create_book_form_wrapper">
            <form className="create_book_form row" onSubmit={handleSubmit}>
                <div className="create_book_input col-md-6" >
                    <label htmlFor="bookName" className="form-label">Book Title</label>
                    <input type="text" className="form-control" id="bookName" value={values.bookName}
                        onChange={handleChange} />
                    {errors.bookName && <span className="form_error">This field is required</span>}
                </div>
                <div className="create_book_input col-md-6">
                    <label htmlFor="bookAuthor" className="form-label">Book Author</label>
                    <input type="text" className="form-control" id="bookAuthor" value={values.bookAuthor}
                        onChange={handleChange} />
                    {errors.bookAuthor && <span className="form_error">This field is required</span>}
                </div>
                <div className="create_book_form_add_btn_wrapper">
                    <button type="submit" className="btn btn-primary">Create book</button>
                </div>
            </form>
        </div>
    )
}

function CreateBookForm () {
    const dispatch = useDispatch()

    const CreateBookFormHOC = withFormik({
        mapPropsToValues: () => ({ bookName: '', bookAuthor: '' }),
        validate: values => {
            const errors = {}
            if (isStringEmpty(values.bookName)) {
                errors.bookName = 'required'
            }
            if (isStringEmpty(values.bookAuthor)) {
                errors.bookAuthor = 'required'
            }
            return errors
        },
        handleSubmit: (values, { setSubmitting }) => {
            console.log(JSON.stringify(values, null, 2))
            dispatch(actions.createBook({
                title: values.bookName,
                author: values.bookAuthor
            }))
            setTimeout(() => {
                console.log(JSON.stringify(values, null, 2))
                setSubmitting(false)
            }, 1000)
        },
        displayName: 'CreateBookForm'
    })(SimpleCreateBookForm)

    return <CreateBookFormHOC />
}

export default CreateBookForm
