import { createContext, useCallback, useEffect, useRef, useState } from 'react';

const TIMEOUT = 5000;

export const ErrorContext = createContext({
    messages: [],   // { type: 'error' | 'success', text: string, id: string }
    addError: () => { },
    removeError: () => { },
    addOnErrorHandler: (cb) => { console.log('not implemented') },
})

export const ErrorProvider = ({ children }) => {
    const messages = useRef([]);
    const onErrorHandlers = useRef([]);

    const addOnErrorHandler = (cb) => {
        onErrorHandlers.current.push(cb);
    }

    const addError = (msg) => {
        const id = new Date().valueOf();
        messages.current = [...messages.current, { type: 'error', text: msg, id }];

        onErrorHandlers.current.forEach(x => x());

        setTimeout(() => {
            removeError(id);
        }, TIMEOUT);
    }

    const removeError = (id) => {
        messages.current = [...messages.current.filter(x => x.id !== id)];
        onErrorHandlers.current.forEach(x => x());
    }

    return (
        <ErrorContext.Provider
            value={{
                messages,
                addOnErrorHandler,
                addError,
                removeError,
            }}
        >{children}</ErrorContext.Provider>
    )
}