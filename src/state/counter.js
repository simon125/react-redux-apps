//action type declaration

const INC = 'counter/INC'
const DEC = 'counter/DEC'

//action creators declaration

export const inc = (numb = 1) => ({ type: INC, numb })
export const dec = (numb = 1) => ({ type: DEC, numb })

const initialState = 0

export default (state = initialState, action) => {  //jeżeli nie ma nic w state to uzyj stanu defaultowego initailState
   switch (action.type){
    case INC: 
    return state + action.numb
    case DEC: 
    return state - action.numb   
    default:
    return state 
   }
} 