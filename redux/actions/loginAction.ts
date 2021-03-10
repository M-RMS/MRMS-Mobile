import axios from 'axios'
import { useState } from 'react'
import {
  FETCH_USER_DATA_ERROR,
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
} from './actionTypes'

export const fetchDataRequest = () => {
  return {
    type: FETCH_USER_DATA_REQUEST,
  }
}

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_USER_DATA_SUCCESS,
    payload: data,
  }
}

export const fetchDataError = (error) => {
  return {
    type: FETCH_USER_DATA_ERROR,
    payload: error,
  }
}

export const fetchData = (email, password) => {

  /* let bodyFormData = new FormData()
   bodyFormData.append('email', email)
   bodyFormData.append('password', password)*/
  return async (dispatch) => {
    dispatch(fetchDataRequest())
    try {
      await axios
        .request({
          method: 'post',
          url: 'http://104.248.123.249/login',
          data: {
            email: email,
            password: password
          }
        })
        .then((response) => {
          dispatch(fetchDataSuccess(response.data.data))
        })
    } catch (error) {
      dispatch(fetchDataError(error))
      console.log(error)

    }
  }
}
