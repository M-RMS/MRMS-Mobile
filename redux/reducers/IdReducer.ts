import {
  ID_PASSING
} from '../actions/actionTypes'

const initial_number = {
  item: [],
  error: ''
}
const IdReducer = (state = initial_number, action: any) => {
  switch (action.type) {
    case ID_PASSING:
      return { ...state, item: action.payload, error: 'aga b' }

    default:
      return state
  }
}
export default IdReducer
