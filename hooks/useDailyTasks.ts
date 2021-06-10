import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

export type TasksRequestObject = {
  data: propsTasks[]
  fetched?: boolean
  fetching?: boolean
  error?: boolean
}

const useDailyTasks = (skeletonCount?: number | undefined) => {

  const rnd = useSelector((state) => state.Random.num)
  const [holder, setHolder] = useState(-1)
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
          url: 'http://192.168.1.33:45455/get-all-maintenances2',

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


export interface propsTasks {
  mID: number;
  machineName: string;
  groupName: string;
  pieceID: number;
  pieceName: string;
  pieceImageURL: string;
  pieceRisk: string;
  pieceRiskDegree: number;
  mtypes: string;
  mdefination: string;
  userName: string;
  moccurederror: string;
  mstype: string;
}


/*

export const data: propsTasks[] = [
  {
    id: 1,
    pieceId: 2,
    pieceName: 'Sarı Koca Somun',
    pieceImageUrl: 'http://placeimg.com/500/500/nature?19630',
    type: Type.Daily,
    maintenance: 'Yağları yenile',
    isDone: true,
    riskLevel: 2,
    machineName: 'Lamel Makinesi',
    machineGroup: 'Sarım Grubu',
    daily: 'Yağları Yenile',
    halfYearly: 'Demirleri cilala',
    riskDescription: 'Aşırı ısınmaya bağlı temasta ciltte kızarıklık',
    userName: 'Ali Kuş',
    userUrl: 'http://placeimg.com/500/500/people?19637',
    date: '20 Mayıs',
    faultDesc: 'Yağ katmanları temizlenmediği için yağ yenilenemedi',
    fault: true

  },
  {
    id: 2,
    pieceId: 5,
    pieceName: 'Baskı Matkabı',
    pieceImageUrl: 'http://placeimg.com/500/500/nature?19631',
    type: Type.Monthly,
    maintenance: 'Matkap ucunu törpüle',
    isDone: true,
    riskLevel: 4,
    machineName: 'Basım Makinesi',
    machineGroup: 'Delme Grubu',
    monthly: 'Matkap ucunu törpüle',
    halfYearly: 'Bakırları cilala',
    riskDescription: 'El delinmesi',
    userName: 'Ahmet Sezer',
    userUrl: 'http://placeimg.com/500/500/people?19631',
    date: '21 Mayıs',
    fault: false

  },
  {
    id: 3,
    pieceId: 24,
    pieceName: 'Yapıştırıcı Başlık',
    pieceImageUrl: 'http://placeimg.com/500/500/nature?19632',
    type: Type.HalfYearly,
    maintenance: 'Silikonları Yenile',
    isDone: false,
    riskLevel: 1,
    machineName: 'Lehim Makinesi',
    machineGroup: 'Eritme Grubu',
    daily: 'Yağları Yenile',
    monthly: 'Somunları sık',
    halfYearly: 'Silikonları Yenile',
    riskDescription: 'Aşırı ısınmaya bağlı temasta ciltte kızarıklık',
    fault: false
  },
  {
    id: 4,
    pieceId: 25,
    pieceName: 'Oluk Kasnağı',
    pieceImageUrl: 'http://placeimg.com/500/500/nature?19633',
    type: Type.HalfYearly,
    maintenance: 'Parçayı Değiştir',
    isDone: false,
    riskLevel: 5,
    machineName: 'Sarım Makinesi',
    machineGroup: 'Sarmal Grubu',
    halfYearly: 'Parçayı Değiştir',
    yearly: 'Gövdeyi değiştir',
    riskDescription: 'Uzuv kopması',
    fault: false
  },
  {
    id: 5,
    pieceId: 26,
    pieceName: 'Bant Tırnağı',
    pieceImageUrl: 'http://placeimg.com/500/500/nature?19634',
    type: Type.Daily,
    maintenance: 'Cilala',
    isDone: true,
    riskLevel: 3,
    machineName: 'Yapıştırma Makinesi',
    machineGroup: 'Yapışkan Grubu',
    daily: 'Cilala',
    halfYearly: 'Demirleri cilala',
    riskDescription: 'Deri yapışması',
    fault: false,
    userName: 'Mehmet Bahçivan',
    userUrl: 'http://placeimg.com/500/500/people?19627',
    date: '22 Mayıs',
  },
  {
    id: 6,
    pieceId: 26,
    pieceName: 'Kağıt Tekeri',
    pieceImageUrl: 'http://placeimg.com/500/500/nature?19655',
    type: Type.Daily,
    maintenance: 'Hamuru Değiştir',
    isDone: false,
    riskLevel: 2,
    machineName: 'Kağıt Makinesi',
    machineGroup: 'Yapım Grubu',
    daily: 'Hamuru Değiştir',
    monthly: 'Somunları sık',
    halfYearly: 'Demirleri cilala',
    yearly: 'Gövdeyi değiştir',
    riskDescription: 'Göz sulanması',
    fault: false
  },
  {
    id: 7,
    pieceId: 26,
    pieceName: 'Bıçak Sırtı',
    pieceImageUrl: 'http://placeimg.com/500/500/nature?19636',
    type: Type.Daily,
    maintenance: 'Bile',
    isDone: true,
    riskLevel: 1,
    machineName: 'Kesme Makinesi',
    machineGroup: 'Kesim Grubu',
    daily: 'Bile',
    monthly: 'Somunları sık',
    halfYearly: 'Demirleri cilala',
    yearly: 'Gövdeyi değiştir',
    riskDescription: 'Kulak çınlaması',
    fault: false,
    userName: 'Sinem Kolon',
    userUrl: 'http://placeimg.com/500/500/people?19697',
    date: '29 Mayıs',
  },
]*/
export default useDailyTasks
