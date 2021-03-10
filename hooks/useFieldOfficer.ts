import { useEffect, useState } from 'react'

export type FieldOfficerRequestObject = {
  data: FieldOfficer[]
  fetched?: boolean
  fetching?: boolean
  error?: boolean
}

const useFieldOfficer = (skeletonCount?: number | undefined) => {
  const initialValues: FieldOfficerRequestObject = {
    data: skeletonCount ? Array(skeletonCount).fill(0) : [],
    fetched: false,
    fetching: true,
    error: false,
  }

  const [request, setRequest] = useState<FieldOfficerRequestObject>(
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
//TODO billboard tipi olucak (billboard, raket ve led şeklinde. Tasarımlar netleşince renkler bu tiplere göre ayarlanıcak.)
export interface FieldOfficer {
  id: number
  name: string
  phone_number: string
  pp_url?: string
}

const data: FieldOfficer[] = [
  {
    id: 1,
    name: 'İbrahim Aksüt',
    phone_number: '+90 530 117 62 40',
    pp_url: 'https://cdn.discordapp.com/attachments/707361479262863421/757527239209517076/ibo.png'
  },
  {
    id: 2,
    name: 'Samet Vural Üstün',
    phone_number: '+90 534 691 71 60'
  },

]

export default useFieldOfficer
