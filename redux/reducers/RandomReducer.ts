import {
  RANDOM_NUMBER
} from '../actions/actionTypes'

const initial_number = {
  num: 0
}
const RandomReducer = (state = initial_number, action: any) => {
  switch (action.type) {
    case RANDOM_NUMBER:
      return { ...state, num: action.payload, error: '' }

    default:
      return state
  }
}
export default RandomReducer
