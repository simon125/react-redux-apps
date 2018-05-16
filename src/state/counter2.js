const DEC = 'counter/INC'
const INC = 'counter/DEC'

export const inc2 = () => ({type: INC})
export const dec2 = () => ({type: DEC})

const initialState = 0

export default (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return state + 1
        case DEC:
            return state - 1
        default:
            return state
    }
}