import { useDispatch, useSelector } from 'react-redux'
import {useState} from "react";
import {createSelection} from "../../actions/selection-actions";
import {isObjectEmpty, isStringEmpty} from "../../utils/utils";

function CreateSelectionForm() {
  const dispatch = useDispatch()
  const [selectionName, setSelectionName] = useState("")
  const [selectionAuthor, setSelectionAuthor] = useState("")
  const [selectionEmail, setSelectionEmail] = useState("")

  const [errors, setErrors] = useState({})
  const onSubmit = async () => {
    let errors = {}
    if (isStringEmpty(selectionName)) {
      errors.selectionName = 'required'
    }
    if (isStringEmpty(selectionAuthor)) {
      errors.selectionAuthor = 'required'
    }
    if (isObjectEmpty(errors)) {
      dispatch(createSelection({
        title: selectionName,
        author: selectionAuthor,
        email: selectionEmail
      }))
      setSelectionName("")
      setSelectionAuthor("")
      setSelectionEmail("")
      setErrors({})
    } else {
      setErrors(errors)
    }
  }

  return (
    <div className="create_selection_form_wrapper">
      <form className="create_selection_form row" onSubmit={e=>{e.preventDefault(); onSubmit()}}>
        <div className="create_selection_input col-md-4" >
          <label htmlFor="selectionName" className="form-label">Selection Title</label>
          <input type="text" className="form-control" id="selectionName" value={selectionName}
                 onChange={e=>setSelectionName(e.target.value)} />
          {errors.selectionName && <span className="form_error">This field is required</span>}
        </div>
        <div className="create_selection_input col-md-4">
          <label htmlFor="selectionAuthor" className="form-label">Selection Author</label>
          <input type="text" className="form-control" id="selectionAuthor" value={selectionAuthor}
                 onChange={e=>setSelectionAuthor(e.target.value)} />
          {errors.selectionAuthor && <span className="form_error">This field is required</span>}
        </div>
        <div className="create_selection_input col-md-4">
          <label htmlFor="selectionAuthor" className="form-label">E-mail</label>
          <input type="text" className="form-control" id="selectionAuthor" value={selectionEmail}
                 onChange={e=>setSelectionEmail(e.target.value)} />
          {errors.selectionEmail && <span className="form_error">This field is required</span>}
        </div>
        <div className="create_selection_form_add_btn_wrapper">
          <button type="submit" className="btn btn-primary">Create selection</button>
        </div>
      </form>
    </div>
  )
}

export default CreateSelectionForm