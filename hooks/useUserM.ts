import { useEffect, useState } from 'react'

export type UserMRequestObject = {
  data: propsUserM[]
  fetched?: boolean
  fetching?: boolean
  error?: boolean
}

const useUserM = (skeletonCount?: number | undefined) => {
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
    const time = setTimeout(() => {
      setRequest({
        data,
        fetched: true,
        fetching: false,
        error: false,
      })
    }, 2222)

    return () => clearTimeout(time)
  }, [])

  return request
}

enum roles {
  Admin = 'Yönetici',
  Supervisor = 'Gözlemci',
  Maintainer = 'Bakımcı'
}

export interface propsUserM {
  id: number
  name: string
  email: string
  mobileNumber: string
  imgUrl?: string
  role: roles
}

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
]
export default useUserM
