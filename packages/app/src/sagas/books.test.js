import { call, put, take, race, delay } from 'redux-saga/effects'
import { testSaga, expectSaga } from 'redux-saga-test-plan'
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

    it('should fetch books using testSaga', function () {
        const response = { data: [] }

        testSaga(fetchBooksWorker)
            .next()
            .put(actions.fetchingBooks(true))
            .next()
            .race([
                call(SERVER.get, '/books'),
                delay(12000, true),
                take(ActionTypes.CANCEL_FETCH_BOOK)
            ])
            .next([response])
            .put(actions.fetchBooksFulFilled(response.data))
            .next()
            .put(actions.fetchingBooks(false))
            .next()
            .isDone()
    })

    it('should fetch books using expectSaga', function () {
        const response = { data: [] }

        return expectSaga(fetchBooksWorker)
            .provide([

                [race([
                    call(SERVER.get, '/books'),
                    delay(12000, true),
                    take(ActionTypes.CANCEL_FETCH_BOOK)
                ]), [response]]

            ])
            .put(actions.fetchBooksFulFilled(response.data))
            .run()
    })

    it('should cancel books request', function () {
        const response = { data: [] }

        return expectSaga(fetchBooksWorker)
            .provide([

                [race([
                    call(SERVER.get, '/books'),
                    delay(12000, true),
                    take(ActionTypes.CANCEL_FETCH_BOOK)
                ]), [undefined, undefined, true]]

            ])
            .put(actions.fetchingBooks(false))
            .not.put(actions.fetchBooksFulFilled(response.data))
            .not.put(actions.requestIsTimedOut(true))
            .run()
    })
    it('should stop request by timeout', function () {
        const response = { data: [] }

        return expectSaga(fetchBooksWorker)
            .provide([

                [race([
                    call(SERVER.get, '/books'),
                    delay(12000, true),
                    take(ActionTypes.CANCEL_FETCH_BOOK)
                ]), [undefined, true, undefined]]

            ])
            .put(actions.fetchingBooks(false))
            .not.put(actions.fetchBooksFulFilled(response.data))
            .put(actions.requestIsTimedOut(true))
            .run()
    })
})
