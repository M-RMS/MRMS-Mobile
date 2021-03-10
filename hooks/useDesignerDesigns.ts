import { useEffect, useState } from 'react'
import call from '~/utils/call'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

export type DesignsCardRequestObject = {
  data: Design[]
  fetched?: boolean
  fetching?: boolean
  error?: boolean
}
export interface DesignerProfile {
  id: number;
  designerId: number;
  fullName: string;
  mobileNumber: string;
  avatarUrl: string;
}

export interface DesignImage {
  id: number;
  designId: number;
  imageUrl: string;
  createdAt: string;
}

export interface Design {
  id: number;
  designerProfileId: number;
  type: string;
  title: string;
  detail: string;
  createdAt: string;
  designerProfile: DesignerProfile;
  designImages: DesignImage[];
}

export interface Response<T> {
  data: T[];
}

const useDesignerDesigns = (skeletonCount?: number | undefined) => {
  const userData = useSelector((state) => state.User.users)
  const filterData = useSelector((state) => state.FilterDesigns.filterDesigns)
  const sortData = useSelector((state) => state.SortDesigns.sortDesigns)
  const rnd = useSelector((state) => state.Random.num)
  const [sorted, setSorted] = useState(false)
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
            filter: {
              designer: [userData.designerProfile.fullName]
            },
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
            filter: {
              designer: [userData.designerProfile.fullName]
            },
            sort: {
              type: 'date',
              order: 'desc'
            }
          },
        })
        .then((response) => {
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


  return request
}

export default useDesignerDesigns
