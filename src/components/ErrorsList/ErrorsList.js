import { useCallback, useContext, useEffect, useState } from 'react'
import { ErrorContext } from '../../context/ErrorContext'
import ToastComponent from '../Toast/Toast'

export function ErrorsList () {
    const { messages, removeError, addOnErrorHandler } = useContext(ErrorContext)

    const [currentMessages, setCurrentMessages] = useState([])

    const handleRemoveError = useCallback((id) => {
        removeError(id)
    }, [])

    useEffect(() => {
        addOnErrorHandler(() => {
            setCurrentMessages(messages.current)
        })
    }, [])

    if (currentMessages.length === 0) {
        return null
    }

    return (
        <>
            {currentMessages.map(({ text, id, type }) => (
                <ToastComponent
                    key={id}
                    type={type}
                    content={text}
                    onClose={handleRemoveError}
                >
                    <span>{type}</span>
                    <span>{text}</span>
                </ToastComponent>
            ))}
        </>
    )
}
