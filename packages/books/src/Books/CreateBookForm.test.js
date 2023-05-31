import React from 'react'

import { screen, render as rtlRender } from '@testing-library/react'
import CreateBookForm from './CreateBookForm'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { defaultState, reducer } from '../../reducers/reducer'
import userEvent from '@testing-library/user-event'
import { actions } from '../../actions/common'

function render (ui, {
    initialState,
    store = createStore(reducer, initialState)
} = {}
) {
    function Wrapper ({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper })
}

it('renders "Book Title" title', async () => {
    render(
        <CreateBookForm />, {
            initialState: defaultState
        }
    )

    const caption = await screen.findByText('Create book')
    expect(caption).toBeInTheDocument()
})

it('calls store.dispatch() on onSubmit()', async () => {
    const mockF = jest.fn()
    render(
        <CreateBookForm />, {
            initialState: {},
            store: {
                dispatch: mockF,
                getState: () => defaultState,
                subscribe: () => null
            }
        }
    )

    const btSubmit = await screen.findByText('Create book')
    const editBookName = await screen.findByLabelText('Book Title')
    const editBookAuthor = await screen.findByLabelText('Book Author')

    const bookName = 'War and Pease'
    const authorName = 'Lev Tolstoi'
    await userEvent.type(editBookName, bookName)
    await userEvent.type(editBookAuthor, authorName)
    await userEvent.click(btSubmit)

    expect(mockF).toBeCalledTimes(1)
    expect(mockF).toBeCalledWith(actions.createBook({
        title: bookName,
        author: authorName
    }))
})
