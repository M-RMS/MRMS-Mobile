import {
  FILTER_MAP
} from '../actions/actionTypes'


const FilterMap = (filterFields) => {
  return { type: FILTER_MAP, payload: filterFields }
}
export default FilterMap