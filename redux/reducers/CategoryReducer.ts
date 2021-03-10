import {
  SAVE_CATEGORY_DATA
} from '../actions/actionTypes'

const INITIAL_STATE = {
  category_id: null,
  error: null
}


const CategoryReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SAVE_CATEGORY_DATA:
      return { ...state, category_id: action.payload, error: '' }

    default:
      return state
  }
}


export default CategoryReducer
