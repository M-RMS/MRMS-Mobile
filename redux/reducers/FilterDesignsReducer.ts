import {
    FILTER_DESIGNS
  } from '../actions/actionTypes'
  
  const type = ''
  const designer = ''
  const date = ''
  
  const filter = {}
  const initial_number = {
  
    filterDesigns: [type,designer,date],
    error: ''
  }
  const FilterDesignReducer = (state = initial_number, action: any) => {
    switch (action.type) {
      case FILTER_DESIGNS:
        return { ...state, filterDesigns: action.payload, error: 'aga b' }
  
      default:
        return state
    }
  }
  export default FilterDesignReducer
  