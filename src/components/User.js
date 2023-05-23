import { useContext } from 'react'
import { SayHelloContext } from '../context/SayHelloContext'

export const User = () => {
    const { setName, name, sayHello } = useContext(SayHelloContext)

    return (<div>
        <div>sayHello(): {sayHello()}</div>
        <div>name: {name}</div>
        <input onChange={(e) => setName(e.target.value)} />
    </div>)
}
