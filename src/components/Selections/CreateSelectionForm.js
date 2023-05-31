import { useDispatch } from 'react-redux'
import { memo } from 'react'
import { actions } from '../../actions/common'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

function CreateSelectionForm () {
    const schema = yup.object().shape({
        title: yup.string().required(),
        author: yup.string().required(),
        email: yup.string()
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const dispatch = useDispatch()
    const onSubmit = (values) => {
        dispatch(actions.createSelection({
            title: values.title,
            author: values.author,
            email: values.email
        }))
    }

    return (
        <div className="create_selection_form_wrapper">
            <form className="create_selection_form row" onSubmit={handleSubmit(onSubmit)}>
                <div className="create_selection_input col-md-4" >
                    <label htmlFor="title" className="form-label">Selection Title</label>
                    <input className="form-control" id="title" {...register('title')} />
                    {errors.title && <span className="form_error">This field is required</span>}
                </div>
                <div className="create_selection_input col-md-4">
                    <label htmlFor="author" className="form-label">Selection Author</label>
                    <input className="form-control" id="author" {...register('author')} />
                    {errors.author && <span className="form_error">This field is required</span>}
                </div>
                <div className="create_selection_input col-md-4">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input className="form-control" id="email" {...register('email')} />
                    {errors.email && <span className="form_error">This field is required</span>}
                </div>
                <div className="create_selection_form_add_btn_wrapper">
                    <button type="submit" className="btn btn-primary">Create selection</button>
                </div>
            </form>
        </div>
    )
}

export default memo(CreateSelectionForm)
