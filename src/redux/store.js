import { createStore, applyMiddleware, combineReducers } from 'redux'

import { logger, promise } from '../redux/middleware'
import dorms from './_reducers/dorms'

const reducers = combineReducers({
    dorms
})

const store = createStore(
    reducers,
    applyMiddleware(logger, promise)
)

export default store