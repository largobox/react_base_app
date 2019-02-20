import { createStore, applyMiddleware, compose  } from 'redux'
import reducer from '../reducers'
import api from '../middlewares/api'

const enhancer = compose(
  applyMiddleware(api)
)

const store = createStore(reducer, enhancer)

export default store