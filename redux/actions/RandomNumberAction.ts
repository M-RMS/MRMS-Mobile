import {
  RANDOM_NUMBER
} from '../actions/actionTypes'


const RandomNumberAction = (num) => {
  return { type: RANDOM_NUMBER, payload: num }
}
export default RandomNumberAction
