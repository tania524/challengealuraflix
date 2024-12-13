import { useContext, useState } from 'react'
import Button from './Button'
import Input from './Input'
import Table from './Table'
import TextArea from './TextArea'
import { deleteDataApi, postDataApi, putDataApi } from '../services/servicesApi'
import { v4 as uuidv4 } from 'uuid'
import { ApiContext } from '../context/Api'
const URL_CATEGORIES = 'https://api-alura-flix.vercel.app/categorias'

function NewCategory() {
  const { categories, refreshListCategories } = useContext(ApiContext)
  const [editCategory, setEditCategory] = useState(false)
  const [infoCategory, setInfoCategory] = useState({
    titulo: '',
    color: '',
    descripcion: ''
  })
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInfoCategory((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!editCategory) {
      const newCategory = {
        id: uuidv4(),
        ...infoCategory
      }
      await postDataApi(URL_CATEGORIES, newCategory)
      refreshListCategories()
      setInfoCategory({
        titulo: '',
        color: '',
        descripcion: ''
      })
      return
    }
    await putDataApi(URL_CATEGORIES, infoCategory)
    refreshListCategories()
    setInfoCategory({
      titulo: '',
      color: '',
      descripcion: ''
    })
  }

  const cleanForm = () => {
    setInfoCategory({
      titulo: '',
      color: '',
      descripcion: ''
    })
  }
  const deleteCategory = async (id) => {
    await deleteDataApi(URL_CATEGORIES, id)
    refreshListCategories()
  }
  return (
    <section className='flex flex-col gap-4 mt-10'>
      <form className='flex flex-col gap-4' action='submit'>
        <h2 className='text-xl text-blue-400 font-medium'>Nuevo producto</h2>
        <Input
          label='Título'
          name='titulo'
          value={infoCategory.titulo}
          handleChange={handleOnChange}
        />
        <div className='relative w-full'>
          <Input
            label='Color'
            name='color'
            value={infoCategory.color}
            handleChange={handleOnChange}
          />
          <div
            style={{ backgroundColor: infoCategory.color }}
            className='w-8 h-6 rounded absolute top-[28px] right-3'
          ></div>
        </div>
        <TextArea
          label='Descripción'
          name='descripcion'
          value={infoCategory.descripcion}
          handleInputChange={handleOnChange}
        />
        <div className='flex gap-4 justify-start'>
          <Button name='Guardar' position='left' handleClick={handleSubmit} />
          <Button name='Limpiar' handleClick={cleanForm} />
        </div>
      </form>
      {categories && (
        <Table
          setInfoCategory={setInfoCategory}
          setEditCategory={setEditCategory}
          url={URL_CATEGORIES}
          categories={categories}
          deleteCategory={deleteCategory}
        />
      )}
    </section>
  )
}

export default NewCategory
