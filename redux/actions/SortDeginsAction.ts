import {
  SORT_DESIGNS
} from '../actions/actionTypes'


const SortDesigns = (sortDesigns) => {
  return { type: SORT_DESIGNS, payload: sortDesigns }
}
export default SortDesigns