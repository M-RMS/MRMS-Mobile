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
  const sortData = useSelector((state) => state.SortDesigns.sortDesigns)
  const filterData = useSelector((state) => state.FilterDesigns.filterDesigns)
  const userData = useSelector((state) => state.User.users)

  const [sorted, setSorted] = useState(false)
  const [holder, setHolder] = useState(-1)
  const [filtered, setFiltered] = useState(false)

  const initialValues: DesignsCardRequestObject = {
    data: skeletonCount ? Array(skeletonCount).fill(0) : [],
    fetched: false,
    fetching: true,
    error: false,
  }
  const deneme = () => {
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
              type: sortData[0].type,
              order: sortData[1].order
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
          setSorted(false)
        })
    } catch (error) {
      console.log(error)
    }
  }

  const deneme2 = () => {
    try {
      axios
        .request<Response<Design>>({
          headers: {
            Authorization: 'Bearer ' + userData.token
          },
          method: 'post',
          url: 'http://104.248.123.249/designs/',
          data: {
            filter: {
              type: filterData[0].type,
              designer: filterData[1].designer,
              date: filterData[2].date
            },
            sort: {
              type: 'date',
              order: 'desc'
            },
          },
        })
        .then((response) => {
          console.log(filterData[0].type)
          console.log(filterData[1].designer)
          console.log(filterData[2].date)
          setHolder(rnd)
          setRequest({
            data: response.data.data,
            fetched: true,
            fetching: false,
            error: false,
          })
          setFiltered(false)
        }).catch((error) => {
          console.log(filterData[0].type)
          console.log(filterData[1].designer)
          console.log(filterData[2].date)
        })
    } catch (error) {
      console.log(error)
    }
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

  useEffect(() => {
    setSorted(true)
    sorted ? deneme() : ''
  }, [sortData])

  useEffect(() => {
    setFiltered(true)
    filtered ? deneme2() : ''
  }, [filterData])


  return request
}



export default useDesigns
