import { useSelector, useDispatch } from 'react-redux'
import { Accordion } from 'react-bootstrap'
import Selection from './Selection'

import { useCallback } from 'react'
import { actions } from '../../actions/common'

export const Selections = () => {
    const selections = useSelector(state => state.selections)
    const dispatch = useDispatch()

    const handleDelete = useCallback(
        (evt) => {
            const selectionId = evt.target.dataset.id
            dispatch(actions.removeSelection(selectionId))
        }, [dispatch]
    )

    return <>{ selections?.data.length > 0 && (
        <Accordion>
            {selections.data.map((el, i) => {
                return <Selection key={el._id} item={el} itemKey={i} onDelete={handleDelete} />
            })}
        </Accordion>
    )}
    </>
}

export default Selections
