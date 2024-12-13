import { createContext } from 'react'
import useGetData from '../hooks/useGetData'
export const ApiContext = createContext()

const URL_CATEGORY = 'https://api-alura-flix.vercel.app/categorias'
const URL_VIDEOS = 'https://api-alura-flix.vercel.app/videos'

function Api({ children }) {
  const { data: categories, refreshData: refreshListCategories } =
    useGetData(URL_CATEGORY)
  const { data: videos, refreshData: refreshListVideos } =
    useGetData(URL_VIDEOS)

  return (
    <ApiContext.Provider
      value={{ videos, refreshListVideos, categories, refreshListCategories }}
    >
      {children}
    </ApiContext.Provider>
  )
}

export default Api
