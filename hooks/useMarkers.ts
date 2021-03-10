import { useEffect, useState } from 'react'
import { Haversine, GpsPoint } from 'haversine-position'

export type MarkersRequestObject = {
  data: dummyMarkers[]
  fetched?: boolean
  fetching?: boolean
  error?: boolean
}

const useMarkers = (skeletonCount?: number | undefined) => {
  const initialValues: MarkersRequestObject = {
    data: skeletonCount ? Array(skeletonCount).fill(0) : [],
    fetched: false,
    fetching: true,
    error: false,
  }

  const [request, setRequest] = useState<MarkersRequestObject>(
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
    }, 1000)

    return () => clearTimeout(time)
  }, [])

  return request
}

enum BType {
  Normal = 'Normal',
  Raket = 'Raket',
  Led = 'Led',
}

enum Status {
  Up_To_Date = 'Up_To_Date',
  Out_Of_Date = 'Out_Of_Date',
  Empty = 'Empty',
  Broken = 'Broken'
}


//TODO billboard tipi olucak (billboard, raket ve led şeklinde. Tasarımlar netleşince renkler bu tiplere göre ayarlanıcak.)
interface dummyMarkers {
  id: number
  lat: number
  lon: number
  title?: string
  description?: string
  BType: BType
  number: string
  status: Status
}
export const data: dummyMarkers[] = [
  {
    id: 1,
    lat: 36.400001,
    lon: 35.90000,
    BType: BType.Normal,
    status: Status.Up_To_Date,
    number: 'D01'
  },
  {
    id: 2,
    lat: 36.080001,
    lon: 36.24000,
    BType: BType.Raket,
    status: Status.Out_Of_Date,
    number: 'D02'

  },
  {
    id: 3,
    lat: 36.540001,
    lon: 36.50000,
    BType: BType.Led,
    status: Status.Empty,
    number: 'D03'

  },
  {
    id: 4,
    lat: 36.340001,
    lon: 36.450000,
    BType: BType.Led,
    status: Status.Broken,
    number: 'D04'

  },
  {
    id: 5,
    lat: 36.40001,
    lon: 36.30000,
    BType: BType.Raket,
    status: Status.Empty,
    number: 'D05'


  },
  {
    id: 6,
    lat: 36.140001,
    lon: 36.00000,
    BType: BType.Normal,
    status: Status.Up_To_Date,
    number: 'D06'


  },
]
export default useMarkers
