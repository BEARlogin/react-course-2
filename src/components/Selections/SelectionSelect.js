import {useSelector} from 'react-redux'
import {forwardRef} from "react";
import { memo } from 'react';

const SelectionSelect = forwardRef(({onChange, ...props}, ref) => {
    const selections = useSelector(state => state.selections)
    return (<div className="selection_control_item col-md-5">
            <label htmlFor="selectionSelect">to selection</label>
            <select className="form-select" id="selectionSelect"
                    onChange={onChange}>
            <option value="">Choose a selection</option>
            { selections?.data?.map((el) =>
                <option key={el._id} value={el._id}>{el.title} by {el.author}</option>)}
            </select>
        </div>
    );

});

SelectionSelect.displayName = 'SelectionSelect';
export default memo(SelectionSelect);