import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { set } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'


const useBillboardCategory = (skeletonCount?: number | undefined) => {
  const rnd = useSelector((state) => state.Random.num)
  const userData = useSelector((state) => state.User.users)

  const initialValues: BillboardCategoryRequestObject = {
    data: skeletonCount ? Array(skeletonCount).fill(0) : [],
    fetched: false,
    fetching: true,
    error: false,
  }
  const [fetchedData, setfetchedDataata] = useState(0)
  const [fetchingData, setFetchingData] = useState(false)

  type BillboardCategoryRequestObject = {
    data: BillboardCategory[]
    fetched?: boolean
    fetching?: boolean
    error?: boolean
  }

  enum BType {
    Normal = 'Normal',
    Raket = 'Raket',
    Led = 'Led',
  }

  interface BillboardCategory {
    id: number
    title: string
    detail: string
    btype: BType
    total: number
  }

  let data: BillboardCategory[] = [
    {
      id: 1,
      title: 'Billboard',
      detail: fetchingData ? fetchedData.billboard.totalStaffCount + ' Saha Görevlisi' : '0 Saha Görevlisi',
      total: fetchingData ? fetchedData.billboard.totalBillboardCount : 0,
      btype: BType.Normal,
    },
    {
      id: 2,
      title: 'Raket',
      detail: fetchingData ? fetchedData.led.totalStaffCount + ' Saha Görevlisi' : '0 Saha Görevlisi',
      total: fetchingData ? fetchedData.led.totalLEDCount : 0,
      btype: BType.Raket,
    },
    {
      id: 3,
      title: 'Led',
      detail: fetchingData ? fetchedData.clp.totalStaffCount + ' Saha Görevlisi' : '0 Saha Görevlisi',
      total: fetchingData ? fetchedData.clp.totalCLPCount : 0,
      btype: BType.Led,
    },
  ]

  const [request, setRequest] = useState<BillboardCategoryRequestObject>(
    initialValues
  )
  const { navigate } = useNavigation()

  useEffect(() => {
    try {
      axios
        .request({
          headers: {
            Authorization: 'Bearer ' + userData.token
          },
          method: 'get',
          url: 'http://104.248.123.249/homepage/designer',
        })
        .then((response) => {
          setfetchedDataata(response.data.data.missions)
          setFetchingData(true)
          // console.log(fetchedData.billboard.totalBillboardCount)
        }).catch(error => {
          navigate('OnBoarding')

        })
    } catch (error) {
      console.log(error)
    }


  }, [])


  useEffect(() => {
    fetchingData
      ? setRequest({
        data,
        fetched: true,
        fetching: false,
        error: false,
      })
      : ''
  }, [fetchingData])
  return request
}

export default useBillboardCategory
