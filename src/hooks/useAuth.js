import { useState } from 'react'
import { loginUser } from '../api/authApi'

const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = async (email, password) => {
    try {
      setLoading(true)
      setError(null)

      const user = await loginUser(email, password)

      localStorage.setItem('user', JSON.stringify(user))

      return user
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { login, loading, error }
}

export default useAuth
