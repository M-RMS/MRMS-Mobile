import {
  ROLE
} from '../actions/actionTypes'


const RoleAction = (str: string) => {
  return { type: ROLE, payload: str }
}
export default RoleAction
