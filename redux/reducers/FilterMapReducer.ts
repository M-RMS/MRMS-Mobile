import {
  FILTER_MAP
} from '../actions/actionTypes'

const type = ['billboard', 'led', 'clp']
const status = ['up-to-date', 'out-of-date', 'not-hanged', 'broken']
const initial_number = {

  filterFields: [type, status],
  error: ''
}
const FilterMapReducer = (state = initial_number, action: any) => {
  switch (action.type) {
    case FILTER_MAP:
      return { ...state, filterFields: action.payload, error: 'aga b' }

    default:
      return state
  }
}
export default FilterMapReducer
