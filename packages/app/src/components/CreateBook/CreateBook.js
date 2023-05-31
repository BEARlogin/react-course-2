import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { ErrorContext } from '../../context/ErrorContext'
import { actions } from '../../actions/common'
import { CreateBookForm } from 'books'

function CreateBook () {
    const dispatch = useDispatch()
    const errorCtx = useContext(ErrorContext)
    const onCreate = (book) => {
        dispatch(actions.createBook(book))
    }
    const onError = (e) => {
        errorCtx.addError(e)
    }

    return (
        <CreateBookForm onCreate={onCreate} onError={onError} />
    )
}

export default CreateBook
