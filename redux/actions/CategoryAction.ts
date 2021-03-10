import {
  SAVE_CATEGORY_DATA
} from '../actions/actionTypes'

const SaveCategoryData = category_id => {
  return { type: SAVE_CATEGORY_DATA, payload: category_id }
}
export default SaveCategoryData
