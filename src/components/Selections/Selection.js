import { Accordion, Button } from 'react-bootstrap'
import BookInSelection from './BookInSelection'
import { memo } from 'react'

const arePropsEqual = (oldProps, newProps) => {
    const oldItem = oldProps.item
    const newItem = newProps.item
    const result = !Object.keys(oldItem).some((key) => {
        let changed = oldItem[key] !== newItem[key]
        if (key === 'books') {
            changed = JSON.stringify(oldItem.books.sort()) !== JSON.stringify(newItem.books.sort())
        }

        return changed
    })
    return result
}

const Selection = (props) => {
    const { item, onDelete } = props
    return (
        <>
            <Accordion.Item eventKey={item._id}>
                <Accordion.Header>
                    <span>
                        <strong>{item.title}</strong> by <i>{item.author}</i>
                    </span>
                </Accordion.Header>
                <Accordion.Body>
                    {item.books && item?.books.map((el, i) => {
                        return <BookInSelection selectionId={item._id} bookId={el[0]} key={i} />
                    })}
                    <Button onClick={onDelete}
                        className="remove_selection_btn"
                        variant="outline-danger"
                        data-id={item._id}
                    >
              Delete selection
                    </Button>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}

export const MemoisedSelection = memo(Selection, arePropsEqual)

export default MemoisedSelection
