import {
    FILTER_DESIGNS
  } from '../actions/actionTypes'
  
  
  const FilterDesigns = (filterDesigns) => {
    return { type: FILTER_DESIGNS, payload: filterDesigns }
  }
  export default FilterDesigns