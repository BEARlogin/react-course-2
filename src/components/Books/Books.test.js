import { render, screen } from '../../test-utils'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Books from './Books'

import { server } from '../../mocks/server'
import { act, waitFor } from '@testing-library/react'

describe('Books', () => {
    beforeAll(() => {
        server.listen()
    })

    afterEach(() => {
        server.resetHandlers()
    })

    afterAll(() => {
        server.close()
    })

    test('loads and displays greeting', async () => {
        // ARRANGE
        let component

        await act(async () => {
            component = render(<Books />)
        })

        // screen.debug()
        screen.debug()

        const booksContainer = screen.getByTestId('books-list')
        const books = screen.getAllByTestId('book-item')

        // ASSERT
        expect(books).toHaveLength(7)
    })
})
