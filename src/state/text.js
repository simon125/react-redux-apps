const TEXT = 'text/TEXT'

export const addText = (taskText) => ({ type: TEXT, taskText })

const initialState = ''

export default (state = initialState, action) => {
    switch (action.type) {
        case TEXT:
            return action.taskText

        default:
            return state
    }
}