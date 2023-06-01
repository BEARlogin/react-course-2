import { createContext, useState } from 'react'

export const SayHelloContext = createContext({
    name: '',
    sayHello: () => {
        console.log('hello')
        return 'Hello, there is no context'
    },
    setName: (name) => {
        console.log('name=', name)
    }
})

export const SayHelloProvider = ({ children }) => {
    const [name, setName] = useState('')
    return (
        <SayHelloContext.Provider
            value={{
                name,
                sayHello: () => {
                    if (!name) {
                        return 'What is your name?'
                    }
                    return `Hello ${name}!`
                },
                setName
            }}
        >{children}</SayHelloContext.Provider>
    )
}
