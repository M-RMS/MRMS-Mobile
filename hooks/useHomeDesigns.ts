import { useEffect, useState } from 'react'
import call from '~/utils/call'
import axios from 'axios'
import { useSelector } from 'react-redux'


export type DesignsCardRequestObject = {
  data: Design[]
  fetched?: boolean
  fetching?: boolean
  error?: boolean
}

export interface AdvertisementField {
  id: number
  fieldCode: string
  staffProfileId: number
  status: string
  type: string
}

export interface DesignField {
  id: number
  designId: number
  advertisementFieldId: number
  startOfHanging: string
  endOfHanging: string
  advertisementField: AdvertisementField
}

export interface DesignerProfile {
  id: number
  designerId: number
  fullName: string
  mobileNumber: string
  avatarUrl: string
}

export interface DesignImage {
  id: number
  designId: number
  imageUrl: string
  createdAt: string
}

export interface Design {
  id: number
  designerProfileId: number
  type: string
  title: string
  detail: string
  createdAt: string
  designFields: DesignField[]
  designerProfile: DesignerProfile
  designImages: DesignImage[]
}

export interface Response<T> {
  data: T[]
}

const useDesigns = (skeletonCount?: number | undefined) => {
  const rnd = useSelector((state) => state.Random.num)
  const userData = useSelector((state) => state.User.users)


  const [holder, setHolder] = useState(-1)
  const initialValues: DesignsCardRequestObject = {
    data: skeletonCount ? Array(skeletonCount).fill(0) : [],
    fetched: false,
    fetching: true,
    error: false,
  }

  const [request, setRequest] = useState<DesignsCardRequestObject>(
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
        .request<Response<Design>>({
          headers: {
            Authorization: 'Bearer ' + userData.token
          },
          method: 'post',
          url: 'http://104.248.123.249/designs/',
          data: {
            filter: {},
            sort: {
              type: 'date',
              order: 'desc',
            },
          },
        })
        .then((response) => {
          setHolder(rnd)
          setRequest({
            data: response.data.data,
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



export default useDesigns
