import SERVER from "./server";

export const fetchSelections = async dispatch => {
    let res = await SERVER.get('/selections')
    let selections = res.data
    dispatch({type: "FETCH_SELECTIONS_FULFILLED", payload: selections})
}

export const addBookToSelection = (bookId, selectionId) => async dispatch => {
    await SERVER.post("/selections/"+selectionId+"/books", [bookId]);
    dispatch(fetchSelections)
}

export const createSelection = selection => async dispatch => {
    await SERVER.post("/selections", selection)
    dispatch(fetchSelections)
}

export const removeSelection = selectionId => async dispatch => {
    await SERVER.delete('/selections/'+selectionId);
    dispatch(fetchSelections)
}

export const removeBookFromSelection = (bookId, selectionId) => async dispatch => {
    await SERVER.delete("/selections/"+selectionId+"/books/"+bookId);
    dispatch(fetchSelections)
}

