import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { ThemeProvider } from './context/ThemeContext'
import { defaultState } from './reducers/reducer'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic, store } from './store'
import { server } from './mocks/server'

const AllTheProviders = ({ children }) => {
    const epicMiddleware = createEpicMiddleware()
    const middlewares = [epicMiddleware]
    const mockStore = configureStore(middlewares)
    // const store = mockStore(defaultState)
    epicMiddleware.run(rootEpic)

    return (
        <Provider store={store}>
            <ThemeProvider theme="light">
                {children}
            </ThemeProvider>
        </Provider>
    )
}

const customRender = (ui, options) =>
    render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
