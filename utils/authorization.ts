/* eslint-disable prefer-promise-reject-errors */
import call from './call'

export const login = async ({
  email,
  password
}: {
  email: string
  password: string
}) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await call.post('/login', {
        email,
        password
      })
      // async storage set
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const auth = async () =>
  new Promise(async (resolve, reject) => {
    const token = null // get token
    call.defaults.headers.common['Authorization'] = 'Bearer ' + token
    if (token) {
      try {
        const response = await call.post('/auth')
        resolve(response)
      } catch (error) {
        delete call.defaults.headers.common['Authorization']
        // remove from async storage
        reject()
      }
    } else {
      // remove user
      reject()
    }
  })

export const logout = async () =>
  new Promise((resolve, reject) => {
    try {
      // blacklist token
      // await call.post('logout')
      // remove from async storage
      resolve()
    } catch (error) {
      reject()
    }
  })
