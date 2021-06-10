import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
export type PieceRequestObject = {
  data: propsPieces[]
  fetched?: boolean
  fetching?: boolean
  error?: boolean
}

const usePieces = (skeletonCount?: number | undefined) => {

  const rnd = useSelector((state) => state.Random.num)
  const [holder, setHolder] = useState(-1)
  const initialValues: PieceRequestObject = {
    data: skeletonCount ? Array(skeletonCount).fill(0) : [],
    fetched: false,
    fetching: true,
    error: false,
  }

  const [request, setRequest] = useState<PieceRequestObject>(
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
          url: 'http://192.168.1.33:45455/get-pieces-and-maintenances',

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

export interface Machinez {
  MachineID: number;
  MachineName: string;
  MachineGroups?: any;
}

export interface Groupz {
  GroupID: number;
  GmachineID: number;
  GroupName: string;
  GroupPieces?: any;
}

export interface MaintenanceType {
  typeName: string;
  typeDefinition: string;
}

export interface propsPieces {
  pieceID: number;
  pieceName: string;
  pieceRiskLevel: number;
  pieceImgUrl: string;
  machinez: Machinez;
  groupz: Groupz;
  maintenanceType: MaintenanceType[];
}
/*
export const data: propsPieces[] = [
  {
    id: 1,
    pieceId: 2,
    pieceName: 'Sarı Koca Somun',
    pieceImageUrl: 'http://placeimg.com/500/500/nature?19630',
    type: Type.Daily,
    maintenance: 'Yağları yenile',
    isDone: false,
    riskLevel: 2,
    machineName: 'Lamel Makinesi',
    machineGroup: 'Sarım Grubu',
    daily: 'Yağları Yenile',
    halfYearly: 'Demirleri cilala',
    riskDescription: 'Aşırı ısınmaya bağlı temasta ciltte kızarıklık',
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
  },
  {
    id: 6,
    pieceId: 26,
    pieceName: 'Kağıt Tekeri',
    pieceImageUrl: 'http://placeimg.com/500/500/nature?19635',
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
  },
]*/
export default usePieces
