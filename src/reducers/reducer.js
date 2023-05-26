import { ActionTypes } from '../actions/common'

const defaultState = {
    books: [],
    selections: {
        data: []
    },
    fetchingBooks: false,
    actions: []
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
    case ActionTypes.FETCH_SELECTIONS_FULFILLED:
        return {
            ...state,
            selections: {
                ...state.selections,
                data: action.payload
            }
        }
    case ActionTypes.FETCH_BOOKS_FULFILLED:
        return {
            ...state,
            books: [
                ...action.payload.books
            ]
        }
    case ActionTypes.REMOVE_BOOK_FROM_SELECTION:
        return {
            ...state,
            book: {
                selectionId: action.payload.selectionId,
                bookId: action.payload.bookId
            }
        }
    case ActionTypes.CREATE_SELECTION_FULFILLED:
        return {
            ...state,
            selections: {
                ...state.selections,
                isPending: false,
                newSelection: null
            }
        }
    case ActionTypes.CREATE_BOOK_FULFILLED:
        return {
            ...state,
            selections: {
                ...state.selections,
                isPending: false,
                newSelection: null
            }
        }
    case ActionTypes.HIDE_ERROR_MODAL:
        return {
            ...state,
            modal: {
                ...state.modal,
                isShow: false
            }
        }

    case ActionTypes.SHOW_ERROR_MODAL:
        return {
            ...state,
            modal: {
                ...state.modal,
                message: action.payload.message,
                isShow: true
            }
        }

    case ActionTypes.FETCHING_BOOKS:
        return {
            ...state,
            fetchingBooks: action.payload.fetchingBooks
        }

    case ActionTypes.REQUEST_IS_TIMED_OUT:
        return {
            ...state,
            requestIsTimedOut: action.payload.requestIsTimedOut
        }

    case ActionTypes.LOG_ACTION:
        return {
            ...state,
            actions: [
                ...state.actions,
                action.payload
            ]
        }
    default:
        return state
    }
}
