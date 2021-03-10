import { useEffect, useState } from 'react'
import { Haversine, GpsPoint } from 'haversine-position'

export type BillboardCardRequestObject = {
  data: Billboard[]
  fetched?: boolean
  fetching?: boolean
  error?: boolean
}

const useBillboard = (skeletonCount?: number | undefined) => {
  const initialValues: BillboardCardRequestObject = {
    data: skeletonCount ? Array(skeletonCount).fill(0) : [],
    fetched: false,
    fetching: true,
    error: false,
  }

  const [request, setRequest] = useState<BillboardCardRequestObject>(
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

enum Status {
  Up_To_Date = 'Up_To_Date',
  Out_Of_Date = 'Out_Of_Date',
  Empty = 'Empty',
  Broken = 'Broken'
}

//TODO asım durumu olucak: Güncel,Güncel olmayan, Boş ve Arızalı
//TODO billboard tipi olucak (billboard, raket ve led şeklinde. Tasarımlar netleşince renkler bu tiplere göre ayarlanıcak.)
export interface Billboard {
  id: number
  area_code: string
  office_bearer?: string
  status: Status
  img_url?: string //TODO led billboardlar için array kullanılacak. tipi tamaman ona göre uyarlanacak
  location: string
  coordinates?: GpsPoint & { latitudeDelta: number; longitudeDelta: number }
  distance?: string
  degree?: string | number
}

const data: Billboard[] = [
  {
    id: 1,
    area_code: 'D35',
    office_bearer: 'Mert Ezgin',
    status: Status.Up_To_Date,
    img_url: 'https://cdn.discordapp.com/attachments/707361479262863421/768436004414947338/unknown.png',
    location: 'Aşağıoba, Hatay Havaalanı, 31135 \n Antakya/Hatay'
  },
  {
    id: 2,
    area_code: 'D37',
    status: Status.Broken,
    location: 'Aşağıoba, Hatay Havaalanı, 31135 \n Antakya/Hatay'
  },
  {
    id: 3,
    area_code: 'D23',
    office_bearer: 'İbrahim Aksüt',
    status: Status.Out_Of_Date,
    img_url: 'https://cdn.discordapp.com/attachments/707361479262863421/768436640220971058/unknown.png',
    location: 'Aşağıoba, Hatay Havaalanı, 31135 \n Antakya/Hatay'
  },
  {
    id: 4,
    area_code: 'D32',
    office_bearer: 'Kaan Çakıcı',
    status: Status.Empty,
    img_url: 'https://cdn.discordapp.com/attachments/707361479262863421/768436004414947338/unknown.png',
    location: 'Aşağıoba, Hatay Havaalanı, 31135 \n Antakya/Hatay'
  },
]

export default useBillboard
