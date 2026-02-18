import { useEffect, useState } from 'react'
import { getNovelById } from '../api/novelsApi'

const useNovel = (id) => {
  const [novel, setNovel] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getNovelById(id)
        setNovel(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [id])

  return { novel, loading, error }
}

export default useNovel
