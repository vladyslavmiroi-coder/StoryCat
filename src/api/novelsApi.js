import BASE_URL from './baseApi'
import mockNovels from './mockNovels'

export const getNovels = async () => {
  try {
    const response = await fetch(`${BASE_URL}/novels`)

    if (!response.ok) {
      throw new Error('Server error')
    }

    const data = await response.json()

    if (!data || data.length === 0) {
      return mockNovels
    }

    return data
  } catch (error) {
    console.log('Using fallback data:', error.message)
    return mockNovels
  }
}
