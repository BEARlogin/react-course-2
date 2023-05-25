import { call, put, take, race, delay } from 'redux-saga/effects'

import { fetchBooksWorker } from './books'
import { actions, ActionTypes } from '../actions/common'
import SERVER from '../actions/server'

describe('fetchBooksWorker', () => {
    let gen

    beforeEach(() => {
        gen = fetchBooksWorker()
    })

    it('should fetch books', function () {
        expect(gen.next().value).toEqual(put(actions.fetchingBooks(true)))

        expect(gen.next().value).toEqual(race([
            call(SERVER.get, '/books'),
            delay(12000, true),
            take(ActionTypes.CANCEL_FETCH_BOOK)
        ]))
        const response = { data: [] }

        expect(gen.next([response]).value).toEqual(put(actions.fetchBooksFulFilled(response.data)))

        expect(gen.next().value).toEqual(put(actions.fetchingBooks(false)))

        expect(gen.next().done).toEqual(true)
    })
    it('should cancel books request', function () {

    })
    it('should stop request by timeout', function () {

    })
})
