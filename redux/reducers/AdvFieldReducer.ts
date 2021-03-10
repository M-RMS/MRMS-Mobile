import {
  ADV_FIELD
} from '../actions/actionTypes'

const initial_number = {
  item: [],
  error: ''
}
const AdvFieldReducer = (state = initial_number, action: any) => {
  switch (action.type) {
    case ADV_FIELD:
      return { ...state, item: action.payload, error: 'aga b' }

    default:
      return state
  }
}
export default AdvFieldReducer
