import { ofType } from 'redux-observable'
import { actions, ActionTypes } from '../actions/common'
import { map, startWith, switchMap, Observable, takeUntil, timer } from 'rxjs'
import SERVER from '../actions/server'

const fromPromise = (promise) => new Observable((subscriber) => {
    promise.then((result) => subscriber.next(result))
})

export const fetchBooksEpic = (action$) => {
    return action$.pipe(
        ofType(ActionTypes.FETCH_BOOK_REQUEST),
        switchMap((action) => {
            console.log('switchMap action')
            // return new Promise((resolve) => {
            //     SERVER.get('/books').then((result) => {
            //         resolve(actions.fetchBooksFulFilled(result.data))
            //     })
            // })
            return fromPromise(SERVER.get('/books')).pipe(
                map((result) => actions.fetchBooksFulFilled(result.data)),
                takeUntil(timer(5000)),
                startWith((() => {
                    console.log('startWith inside')
                    return actions.fetchingBooks(false)
                })())
            )
        }),
        map((action) => {
            console.log('action before takeUntil', action)
            return action
        }),
        startWith((() => {
            console.log('startWith action')
            return actions.fetchingBooks(true)
        })())

    )
}
