import { database } from '../firebase'

const SET = 'asyncReduxCounter/SET'
// const DEC = 'asyncReduxCounter/DEC'
const set = (newValue) => ({
    type: SET,
    newValue
})
export const initCounterSync = () => (dispatch, getState) => {
    database.ref('/counter').on(
        'value', (snapshot) => dispatch(set(snapshot.val()))
    )
}
export const inc = () => (dispatch, getState) => {
    const state = getState()
    database.ref('/counter').set(
        state.asyncReduxCounter.asyncCounterValue + 1
    )
}
export const dec = () => (dispatch, getState) => {
    const state = getState()
    database.ref('/counter').set(
        state.asyncReduxCounter.asyncCounterValue - 1
    )
}
const initialState = {
    asyncCounterValue: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case SET:
            return {
                ...state,
                asyncCounterValue: action.newValue
            }
        default:
            return state
    }
}
