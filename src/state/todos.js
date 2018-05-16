const ADD = 'todos/ADD'
const DEL = 'todos/DEL'
const NEW_TASK_TEXT_CHANGED = 'todos/NEW_TASK_TEXT_CHANGED'


export const add = (taskText) => ({ type: ADD })
export const del = (index) => ({ type: DEL, index })

export const newTaskTextChanged = (newText) => ({
    type: NEW_TASK_TEXT_CHANGED,
    newText
})

const initialState = {
    tasks: [],
    newTaskText: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return state.newTaskText ?
                {
                    ...state,
                    tasks: state.tasks.concat({
                        text: state.newTaskText,
                        completed: false
                    })
                }
                : state
        case DEL:
            return {
                ...state,
                tasks: state.filter((task, index) => index !== action.index)
            }
            case NEW_TASK_TEXT_CHANGED:
            return {
                ...state,
                newTaskText: action.newText
            }
        default:
            return state
    }
}