import { fetchBooksEpic } from './books'
import { Observable } from 'rxjs'
import { actions } from '../actions/common'

it('fetchBooksEpic returns something', (done) => {
    const action$ = new Observable((subscriber) => {
        subscriber.next(actions.fetchBooks())
    })
    const serverMock = { get: () => ({ then: () => [] }) }

    fetchBooksEpic(action$, undefined, { SERVER: serverMock }).subscribe((action) => {
        console.log('fetchBooksEpic test action=', action)
        done()
    })
})
