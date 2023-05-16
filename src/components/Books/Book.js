import {memo} from 'react';

const arePropsEqual = (oldProps, newProps) => {
    const oldItem = oldProps.item;
    const newItem = newProps.item;
    const result = !Object.keys(oldItem).some((key) => {
        const changed = oldItem[key] !== newItem[key]
        return changed
    });
    return result;
};

export const Book = ({item, onDelete}) => {
    return <li className="list-group-item d-flex justify-content-between align-items-center">
    <span><strong>{item.title}</strong> by {item.author}</span>
    <span className="pull-right">
        <button 
            type="button" 
            className="btn btn-outline-danger btn-sm"
            onClick={onDelete}
            data-id={item._id}
        >
            DELETE
        </button>
    </span>
  </li>

};

export default memo(Book, arePropsEqual)
