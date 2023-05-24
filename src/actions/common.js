export const ActionTypes = Object.freeze({
    FETCH_BOOK_REQUEST: 'FETCH_BOOK_REQUEST',
    FETCH_BOOKS_FULFILLED: 'FETCH_BOOKS_FULFILLED',
    CREATE_BOOK_REQUEST: 'CREATE_BOOK_REQUEST',
    CREATE_BOOK_FULFILLED: 'CREATE_BOOK_FULFILLED',
    REMOVE_BOOK: 'REMOVE_BOOK',

    REMOVE_BOOK_FROM_SELECTION: 'REMOVE_BOOK_FROM_SELECTION',
    ADD_BOOK_TO_SELECTION_REQUEST: 'ADD_BOOK_TO_SELECTION_REQUEST',

    FETCH_SELECTIONS_REQUEST: 'FETCH_SELECTIONS_REQUEST',
    FETCH_SELECTIONS_FULFILLED: 'FETCH_SELECTIONS_FULFILLED',
    CREATE_SELECTION_REQUEST: 'CREATE_SELECTION_REQUEST',
    CREATE_SELECTION_FULFILLED: 'CREATE_SELECTION_FULFILLED',
    REMOVE_SELECTION_REQUEST: 'REMOVE_SELECTION_REQUEST',

    HIDE_ERROR_MODAL: 'HIDE_ERROR_MODAL',
    SHOW_ERROR_MODAL: 'SHOW_ERROR_MODAL'
})

export const actions = {
    fetchBooks: () => ({ type: ActionTypes.FETCH_BOOK_REQUEST }),
    fetchBooksFulFilled: (books) => ({ type: ActionTypes.FETCH_BOOKS_FULFILLED, payload: { books } }),
    createBook: (book) => ({ type: ActionTypes.CREATE_BOOK_REQUEST, payload: { book } }),
    removeBook: (id) => ({ type: ActionTypes.REMOVE_BOOK, payload: { id } }),
    addBookToSelection: (bookId, selectionId) => ({ type: ActionTypes.ADD_BOOK_TO_SELECTION_REQUEST, payload: { bookId, selectionId } }),
    removeBookFromSelection: (bookId, selectionId) => ({ type: ActionTypes.REMOVE_BOOK_FROM_SELECTION, payload: { bookId, selectionId } }),

    fetchSelections: () => ({ type: ActionTypes.FETCH_SELECTIONS_REQUEST }),
    fetchSelectionsFulFilled: (selections) => ({ type: ActionTypes.FETCH_SELECTIONS_FULFILLED, payload: { selections } }),
    createSelection: (selection) => ({ type: ActionTypes.CREATE_SELECTION_REQUEST, payload: selection }),
    removeSelection: (id) => ({ type: ActionTypes.REMOVE_SELECTION_REQUEST, payload: id })
}
