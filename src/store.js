import {createStore, combineReducers} from 'redux'
import counterReducer from './state/counter'

const reducer = combineReducers({
counter: counterReducer


}) 

const store = createStore(reducer)