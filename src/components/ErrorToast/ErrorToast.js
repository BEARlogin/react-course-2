import { createPortal } from "react-dom";
import { ToastComponent } from '../Toast/Toast';
import { useContext, useEffect, useState } from 'react';
import { ErrorContext } from '../../context/ErrorContext';

export function ErrorToast() {
    const element = document.getElementById('modal');

    const { messages, removeError, addOnErrorHandler } = useContext(ErrorContext);

    const [currentMessages, setCurrentMessages] = useState([]);

    useEffect(() => {
        addOnErrorHandler(() => {
            setCurrentMessages(messages.current);
        })
    }, []);

    if (currentMessages.length === 0) {
        return null;
    }

    return createPortal(<ToastComponent messages={currentMessages} onClose={removeError}></ToastComponent>, element);
}