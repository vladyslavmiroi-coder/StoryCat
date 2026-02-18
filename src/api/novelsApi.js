import BASE_URL from './baseApi'

export const getNovels = async () => {
  const response = await fetch(`${BASE_URL}/novels`)

  if (!response.ok) {
    throw new Error('Failed to fetch novels')
  }

  return await response.json()
}

export const getNovelById = async (id) => {
  const response = await fetch(`${BASE_URL}/novels/${id}`)

  if (!response.ok) {
    throw new Error('Novel not found')
  }

  return await response.json()
}
