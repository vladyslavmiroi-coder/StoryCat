import { useEffect, useState } from 'react'
import { getNovels } from '../api/novelsApi'

const useNovels = () => {
  const [novels, setNovels] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getNovels()
        setNovels(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return { novels, loading, error }
}

export default useNovels
