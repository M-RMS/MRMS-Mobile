import {
  SORT_DESIGNS
} from '../actions/actionTypes'

const type = 'date'
const order = 'desc'

const filter = {}
const initial_number = {

  sortDesigns: [type, order],
  error: ''
}
const SortDesignsReducer = (state = initial_number, action: any) => {
  switch (action.type) {
    case SORT_DESIGNS:
      return { ...state, sortDesigns: action.payload, error: 'aga b' }

    default:
      return state
  }
}
export default SortDesignsReducer
