import SERVER from "./server";

export const fetchBooks = async dispatch => {
    let res = await SERVER.get('/books')
    let books = res.data
    dispatch({type: "FETCH_BOOKS_FULFILLED", payload: {books}})
}

export const createBook = book => async dispatch => {
    await SERVER.post('books', book)
    dispatch(fetchBooks)
}

export const removeBook = id => async dispatch => {
    await SERVER.delete('/books/'+id)
    dispatch(fetchBooks)
}
