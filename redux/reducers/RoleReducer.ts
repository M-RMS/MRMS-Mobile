import {
  ROLE
} from '../actions/actionTypes'

const initial_number = {
  str: 'admin'
}
const RoleReducer = (state = initial_number, action: any) => {
  switch (action.type) {
    case ROLE:
      return { ...state, str: action.payload, error: '' }

    default:
      return state
  }
}
export default RoleReducer
