import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import Reducer from '../reducers'

let reducers = combineReducers({
  gallery: Reducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store
