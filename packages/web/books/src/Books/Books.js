import {Book} from './Book'

function Books ({books, fetchingBooks, handleDelete, refreshBooks, cancelFetchBooks}) {

    const refreshCaption = fetchingBooks ? 'Cancel fetch books' : 'Refresh books'
    const onClick = fetchingBooks ? cancelFetchBooks : refreshBooks

    return (
        <>
            <ul className="list-group books-list">
                {books.map((book) =>
                    <Book key={book._id} item={book} onDelete={handleDelete} />
                )}
            </ul>
            <div className='mt-3'>
                <button type="button" className="btn btn-primary" onClick={onClick}>{refreshCaption}</button>
            </div>
        </>
    )
}

export {Books}

