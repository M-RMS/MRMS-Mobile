import {
  FETCH_USER_DATA_ERROR,
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
} from '../actions/actionTypes'

const INITIAL_STATE = {
  fetching: false,
  fetched: false,
  users: [],
  isLoginSuccess: false,
  error: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_REQUEST:
      return { ...state, fetching: true }

    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        isLoginSuccess: true,
        fetched: true,
        fetching: false,
        users: action.payload,
        error: '',
      } //,userToken falanfişman

    case FETCH_USER_DATA_ERROR:
      return {
        ...state,
        fetching: false,
        fetched: true,
        isLoginSuccess: false,
        users: [],
        error: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
