function Table({
  setInfoCategory,
  setEditCategory,
  categories,
  deleteCategory
}) {
  const editCategory = (id) => {
    const oldCategory = categories?.filter((item) => item.id === id)[0]
    setInfoCategory(oldCategory)
    setEditCategory(true)
  }
  return (
    <div className='relative overflow-x-auto mt-6 rounded border-2 border-slate-600'>
      <table className='w-full text-sm text-left text-slate-300'>
        <thead className='text-xs uppercase bg-slate-600 text-gray-200'>
          <tr>
            <th scope='col' className='px-4 py-3'>
              Nombre
            </th>
            <th scope='col' className='pr-4 py-3'>
              Descripción
            </th>
            <th scope='col' className='px-4 py-3 text-center'>
              Editar
            </th>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map(({ titulo, descripcion, id }) => (
              <tr
                key={id}
                className=' border-b bg-transparent border-slate-600'
              >
                <td className='px-4 py-4 max-w-[60px] md:max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis'>
                  {titulo}
                </td>
                <td className='px-0 py-4 max-w-[130px] md:max-w-[400px] whitespace-nowrap overflow-hidden text-ellipsis'>
                  {descripcion}
                </td>
                <td className='px-0 py-4 flex justify-center gap-2'>
                  <button
                    className='[&>svg]:stroke-white [&>svg]:hover:stroke-red-400 [&>svg]:w-5'
                    onClick={() => editCategory(id)}
                  >
                    <svg
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                      <path d='M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4'></path>
                      <path d='M13.5 6.5l4 4'></path>
                      <path d='M16 19h6'></path>
                    </svg>
                  </button>
                  <button
                    className='[&>svg]:stroke-white [&>svg]:hover:stroke-red-400  [&>svg]:w-5'
                    onClick={() => deleteCategory(id)}
                  >
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <path d='M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3' />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
