import { ofType } from 'redux-observable'
import { actions, ActionTypes } from '../actions/common'
import { map, startWith, switchMap, Observable, takeUntil, timer, filter } from 'rxjs'

const fromPromise = (promise) => new Observable((subscriber) => {
    promise.then((result) => subscriber.next(result))
})

export const fetchBooksEpicType1 = (action$, _, { SERVER }) => {
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
                map((result) => {
                    console.log('/books result in pipe start', result)
                    return result
                }),
                map((result) => actions.fetchBooksFulFilled(result.data)),
                takeUntil(timer(5000)),
                takeUntil(action$.pipe(
                    ofType(ActionTypes.CANCEL_FETCH_BOOK)
                )),
                startWith((() => {
                    console.log('startWith inside')
                    return actions.fetchingBooks(true)
                })())
            )
        })

    )
}

export const fetchBooksEpic = (action$, _, { SERVER }) => {
    return action$.pipe(
        ofType(ActionTypes.FETCH_BOOK_REQUEST),
        switchMap(() => {
            return new Observable((observer) => {
                observer.next(actions.fetchingBooks(true))
                const req$ = fromPromise(SERVER.get('/books')).pipe(
                    takeUntil(timer(5000)),
                    takeUntil(action$.pipe(
                        ofType(ActionTypes.CANCEL_FETCH_BOOK)
                    ))
                )
                req$.subscribe({
                    complete: () => {
                        console.log('fetchBooksEpic() complete2()')
                        observer.next(actions.fetchingBooks(false))
                    },
                    next: (result) => {
                        observer.next(actions.fetchBooksFulFilled(result.data))
                    }
                })
            })
        })

    )
}

export const cancelFetchBooksEpicForType1 = (action$) => action$.pipe(
    filter((action) => action.type === ActionTypes.CANCEL_FETCH_BOOK),
    map((action) => {
        console.log('cancelFetchBooksEpic() action=', action)
        return actions.fetchingBooks(false)
    })
)

export const onFetchBooksFulFilled = (action$) => action$.pipe(
    filter((action) => action.type === ActionTypes.FETCH_BOOKS_FULFILLED),
    map((action) => {
        console.log('onFetchBooksFulFilled() action=', action)
        return actions.fetchingBooks(false)
    })
)
