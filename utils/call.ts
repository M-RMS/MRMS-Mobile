import axios from 'axios'

const call = axios.create({
  baseURL: '/',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

call.interceptors.response.use(
  (response) => {
    if (response.data.errors) {
      return Promise.reject(response.data)
    }
    return Promise.resolve(response.data)
  },
  (error) => {
    return Promise.reject(error.response.data)
  }
)

export default call
