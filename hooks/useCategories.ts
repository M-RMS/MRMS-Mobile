import { useEffect, useState } from 'react'

type CategoryRequestObject = {
  data: Category[]
  fetched?: boolean
  fetching?: boolean
  error?: boolean
}

const useCategories = (skeletonCount?: number | undefined) => {
  const initialValues: CategoryRequestObject = {
    data: skeletonCount ? Array(skeletonCount).fill(0) : [],
    fetched: false,
    fetching: true,
    error: false
  }
  const [request, setRequest] = useState<CategoryRequestObject>(initialValues)

  useEffect(() => {
    const time = setTimeout(() => {
      setRequest({
        data,
        fetched: true,
        fetching: false,
        error: false
      })
    }, 1000)

    return () => clearTimeout(time)
  }, [])

  return request
}

export interface Category {
  id: number
  title: string
  value: number
  url: string
}

const data = [
  {
    id: 1,
    title: 'Villa',
    value: 380,
    url:
      'https://www.tatilvillam.com/property-images/thumbnail_lg/147085/villa-alyans-b5bd9f0b28.jpg'
  },
  {
    id: 2,
    title: 'Residance',
    value: 1595,
    url: 'https://parselsorgu.com/wp-content/uploads/2017/03/residance-24.jpg'
  },
  {
    id: 3,
    title: 'Flat',
    value: 654,
    url: 'https://q-cf.bstatic.com/images/hotel/max1024x768/218/218149370.jpg'
  },
  {
    id: 4,
    title: 'Cafe',
    value: 121,
    url:
      'https://www.meyhankoli.com/img/places/source_seo/fabbrica-cafe-bar-8.jpg'
  },
  {
    id: 5,
    title: 'Office',
    value: 780,
    url:
      'https://www.manofis.com/wp-content/uploads/2019/01/ara-b%C3%B6lme-man-ofis.jpg'
  }
]

export default useCategories
