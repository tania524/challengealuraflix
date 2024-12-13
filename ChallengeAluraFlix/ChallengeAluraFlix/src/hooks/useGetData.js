import { useState, useEffect } from 'react'
import { getDataApi } from '../services/servicesApi'

function useGetData(url) {
  const [data, setData] = useState()
  const refreshData = async () => {
    const data = await getDataApi(url)
    setData(data)
  }

  useEffect(() => {
    refreshData()
  }, [])

  return { data, refreshData }
}

export default useGetData
