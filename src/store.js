import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import counter, { inc, dec } from './state/counter'
import todos, { add, del } from './state/todos'
import counter2, { inc2, dec2 } from './state/counter2'
import text from './state/text'
import randomUsers, {setUsersList, fetchUsers} from './state/randomUsers'
import thunk from 'redux-thunk'
import asyncReduxCounter, {initCounterSync} from './state/asyncReduxCounter'


const reducer = combineReducers({
    asyncReduxCounter,
    counter,
    todos,
    counter2,
    text,
    randomUsers
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(  // tworzymy store ze wszystkimi metodami jak patch
    reducer, /* preloadedState, */
    composeEnhancers( // składa dodatki do reduxa
        applyMiddleware(thunk) // 
    )
)

store.dispatch(initCounterSync())