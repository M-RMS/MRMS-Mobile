import { useEffect, useState } from 'react'

export type TasksRequestObject = {
  data: propsTasks[]
  fetched?: boolean
  fetching?: boolean
  error?: boolean
}

const useDailyTasks = (skeletonCount?: number | undefined) => {
  const initialValues: TasksRequestObject = {
    data: skeletonCount ? Array(skeletonCount).fill(0) : [],
    fetched: false,
    fetching: true,
    error: false,
  }

  const [request, setRequest] = useState<TasksRequestObject>(
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

enum Type {
  Daily = 'Günlük Bakım',
  Weekly = 'Haftalık Bakım',
  Monthly = 'Aylık Bakım',
  HalfYearly = '6 Aylık Bakım',
  Yearly = 'Yıllık Bakım'
}


export interface propsTasks {
  id: number
  pieceId: number
  pieceName: String
  pieceImageUrl: string
  type: Type
  maintenance: String
  isDone: boolean
  riskLevel: number
  machineName?: string
  machineGroup?: string
  riskDescription?: string
  daily?: string
  weekly?: string
  monthly?: string
  halfYearly?: string
  yearly?: string
}

export const data: propsTasks[] = [
  {
    id: 1,
    pieceId: 2,
    pieceName: 'Sarı Koca Somun',
    pieceImageUrl: 'https://placeimg.com/640/480/nature',
    type: Type.Daily,
    maintenance: 'Yağları yenile',
    isDone: false,
    riskLevel: 2,
    machineName: 'Lamel Makinesi',
    machineGroup: 'Sarım Grubu',
    daily: 'Yağları Yenile',
    monthly: 'Somunları sık',
    halfYearly: 'Demirleri cilala',
    yearly: 'Gövdeyi değiştir',
    riskDescription: 'Aşırı ısınmaya bağlı temasta ciltte kızarıklık',
  },
  {
    id: 2,
    pieceId: 5,
    pieceName: 'Baskı Matkabı',
    pieceImageUrl: 'https://placeimg.com/640/480/nature',
    type: Type.Monthly,
    maintenance: 'Matkap ucunu törpüle',
    isDone: false,
    riskLevel: 4
  },
  {
    id: 3,
    pieceId: 24,
    pieceName: 'Yapıştırıcı Başlık',
    pieceImageUrl: 'https://placeimg.com/640/480/nature',
    type: Type.HalfYearly,
    maintenance: 'Silikonları Yenile',
    isDone: false,
    riskLevel: 1
  },
  {
    id: 4,
    pieceId: 25,
    pieceName: 'Oluk Kasnağı',
    pieceImageUrl: 'https://placeimg.com/640/480/nature',
    type: Type.HalfYearly,
    maintenance: 'Parçayı Değiştir',
    isDone: false,
    riskLevel: 5
  },
  {
    id: 5,
    pieceId: 26,
    pieceName: 'Bant Tırnağı',
    pieceImageUrl: 'https://placeimg.com/640/480/nature',
    type: Type.Daily,
    maintenance: 'Cilala',
    isDone: false,
    riskLevel: 3
  },
  {
    id: 6,
    pieceId: 26,
    pieceName: 'Kağıt Tekeri',
    pieceImageUrl: 'https://placeimg.com/640/480/nature',
    type: Type.Daily,
    maintenance: 'Hamuru Değiştir',
    isDone: false,
    riskLevel: 2
  },
  {
    id: 7,
    pieceId: 26,
    pieceName: 'Bıçak Sırtı',
    pieceImageUrl: 'https://placeimg.com/640/480/nature',
    type: Type.Daily,
    maintenance: 'Bile',
    isDone: false,
    riskLevel: 1
  },
]
export default useDailyTasks
