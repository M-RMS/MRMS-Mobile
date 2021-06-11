import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
export type UserMRequestObject = {
  data: propsUserM[]
  fetched?: boolean
  fetching?: boolean
  error?: boolean
}
const useUserM = (skeletonCount?: number | undefined) => {
  const rnd = useSelector((state) => state.Random.num)
  const [holder, setHolder] = useState(-1)
  const initialValues: UserMRequestObject = {
    data: skeletonCount ? Array(skeletonCount).fill(0) : [],
    fetched: false,
    fetching: true,
    error: false,
  }
  const [request, setRequest] = useState<UserMRequestObject>(
    initialValues
  )
  useEffect(() => {
    holder !== rnd ?
      setRequest({
        data: skeletonCount ? Array(skeletonCount).fill(0) : [],
        fetched: false,
        fetching: true,
        error: false,
      })
      : ''
    try {
      axios
        .request({
          method: 'get',
          url: 'http://192.168.1.33:45455/api/users',
        })
        .then((response) => {
          setHolder(rnd)
          setRequest({
            data: response.data,
            fetched: true,
            fetching: false,
            error: false,
          })
        })
    } catch (error) {
      console.log(error)
    }
  }, [rnd])
  return request
}
export interface propsUserM {
  userID: number;
  userName: string;
  userDefine: string;
  userMail: string;
  userMobile: string;
  userPassword: string;
  userImageURL: string;
}
/*
export const data: propsUserM[] = [
  {
    id: 1,
    name: 'Mert Mehmet Ezgin',
    email: 'mert@mrms.com',
    mobileNumber: '+905533570887',
    role: roles.Admin,
    imgUrl: 'http://placeimg.com/500/500/people?19631'
  },
  {
    id: 2,
    name: 'İlker Durmaz',
    email: 'iko@mrms.com',
    mobileNumber: '+905533458734',
    role: roles.Supervisor,
    imgUrl: 'http://placeimg.com/500/500/people?19611'
  },
  {
    id: 3,
    name: 'Himmet Can Mercan',
    email: 'himmet@mrms.com',
    mobileNumber: '+905538906531',
    role: roles.Maintainer,
    imgUrl: 'http://placeimg.com/500/500/people?19111'
  },
]*/
export default useUserM
