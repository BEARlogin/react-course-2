import {showError} from "./error-actions"
import axios from "axios"

const SERVER = axios.create({baseURL: 'http://localhost:7000'})

let store = null

export const injectStoreToServer = _store => {
    store = _store
}

SERVER.interceptors.response.use(
    res => {
        if (res.data.err) {
            store.dispatch(
                showError(typeof res.data.err == "string" ? res.data.err :
                    JSON.stringify(res.data.err)))
            return Promise.reject(res.data.err)
        }
        else return res
    },
    (error) => {
        store.dispatch(showError(error.message))
    }
);


export default SERVER