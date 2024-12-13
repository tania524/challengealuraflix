import { useContext } from 'react'
import Carousel from './Carousel'
import { ApiContext } from '../context/Api'

function Category({ title, color }) {
  const { videos } = useContext(ApiContext)
  const listImage = videos?.filter(
    ({ categoria }) => categoria.toLowerCase() === title.toLowerCase()
  )
  return (
    <section className='flex flex-col gap-4 overflow-hidden'>
      <header className='flex flex-col gap-2 md:flex-row md:gap-4 md:items-center'>
        <div
          className='py-1 px-3 text-slate-200 rounded-lg w-max'
          style={{ backgroundColor: color }}
        >
          <h2 className='capitalize md:text-lg'>{title}</h2>
        </div>
        <p className='text-sm md:text-base'>Formación {title} de Alura Latam</p>
      </header>
      <div className='px-[25px]'>
        <Carousel listImage={listImage} color={color} />
      </div>
    </section>
  )
}

export default Category
