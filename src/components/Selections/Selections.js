import { useSelector } from 'react-redux';
import { Accordion } from 'react-bootstrap';
import Selection from './Selection';
import { useDispatch } from 'react-redux'
import {removeSelection} from '../../actions/selection-actions';
import { useCallback } from 'react';

export const Selections = () => {
    const selections = useSelector(state => state.selections);
    const dispatch = useDispatch();

    const handleDelete = useCallback(
        (evt) => {
            const selectionId = evt.target.dataset.id;
            dispatch(removeSelection(selectionId));
        }, [dispatch]
    );

    return <>{ selections?.data.length > 0 && (
        <Accordion>
            {selections.data.map((el,i) => {
                return <Selection key={el._id} item={el} itemKey={i} onDelete={handleDelete} />
            })}
        </Accordion>
    )}
    </>;

};

export default Selections;
