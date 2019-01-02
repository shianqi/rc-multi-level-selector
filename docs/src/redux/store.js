import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducers from './reducers'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

let store = null

const configureStore = () => {
  if (!store) {
    store = createStore(
      reducers,
      applyMiddleware(...middleware)
    )
  }
  return store
}

export default configureStore
