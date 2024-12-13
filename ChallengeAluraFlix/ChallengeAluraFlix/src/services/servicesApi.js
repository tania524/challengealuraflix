export const getDataApi = async (URL_API) => {
  try {
    const res = await fetch(URL_API)
    const data = await res.json()
    return data
  } catch (error) {
    throw new Error('Error al obtener los datos de la API')
  }
}

export const postDataApi = async (URL_API, formData) => {
  try {
    const response = await fetch(URL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Error al enviar los datos a la API')
  }
}

export const putDataApi = async (URL_API, formData) => {
  try {
    const response = await fetch(`${URL_API}/${formData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Error al actualizar los datos en la API')
  }
}

export const deleteDataApi = async (URL_API, id) => {
  try {
    const response = await fetch(`${URL_API}/${id}`, {
      method: 'DELETE'
    })
    const data = response.json()
    return data
  } catch (error) {
    throw new Error('Error al borrar los datos de la API')
  }
}
