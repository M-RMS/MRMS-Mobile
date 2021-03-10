import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

export type FieldOfficerBillboardRequestObject = {
  data: Design[]
  fetched?: boolean
  fetching?: boolean
  error?: boolean
}


export interface DesignerProfile {
  designerProfileId: number;
  userId: number;
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
  updated_at: Date;
  createdAt: string;
  designerProfile: DesignerProfile;
  designImages: DesignImage[];
  imageToDisplay: string;
}

export interface StaffProfile {
  staffProfileId: number;
  userId: number;
  fullName: string;
  mobileNumber: string;
  avatarUrl: string;
}

export interface AdvertisementFieldLocation {
  id: number;
  advertisementFieldId: number;
  country: string;
  city: string;
  district: string;
  neighborhood: string;
  street: string;
  latitude: number;
  longitude: number;
}

export interface Field {
  id: number;
  fieldCode: string;
  staffProfileId: number;
  status: string;
  type: string;
  updatedAt: Date;
  staffProfile: StaffProfile;
  advertisementFieldLocation: AdvertisementFieldLocation;
  imageToDisplay: string[];
}

export interface Counts {
  billboard: number;
  clp: number;
  led: number;
}

export interface Response<T> {
  data: T[]
}

const useFieldOfficerBillboard = (skeletonCount?: number | undefined) => {
  const userData = useSelector((state) => state.User.users)
  const { navigate } = useNavigation()

  const [holder, setHolder] = useState(-1)
  const rnd = useSelector((state) => state.Random.num)
  const initialValues: FieldOfficerBillboardRequestObject = {
    data: skeletonCount ? Array(skeletonCount).fill(0) : [],
    fetched: false,
    fetching: true,
    error: false,
  }

  const [request, setRequest] = useState<FieldOfficerBillboardRequestObject>(
    initialValues
  )


  useEffect(() => {
    try {
      axios
        .request<Response<Design>>({
          headers: {
            Authorization: 'Bearer ' + userData.token
          },
          method: 'get',
          url: 'http://104.248.123.249/homepage/staff',
        })
        .then((response) => {
          setHolder(rnd)
          setRequest({
            data: response.data.data,
            fetched: true,
            fetching: false,
            error: false,
          })
        }).catch(error => {
          navigate('OnBoarding')

        })
    } catch (error) {
      console.log(error)
    }
  }, [])

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
          method: 'get',
          url: 'http://104.248.123.249/homepage/staff',
        })
        .then((response) => {

          setRequest({
            data: response.data.data,
            fetched: true,
            fetching: false,
            error: false,
          })

        }).catch(error => {
          navigate('OnBoarding')

        })
    } catch (error) {

      console.log(error)
    }
  }, [rnd])
  return request
}

export default useFieldOfficerBillboard
