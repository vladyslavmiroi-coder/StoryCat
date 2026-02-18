import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './login.css'

const LoginPage = ({ authOverride }) => {
  const auth = authOverride || useAuth()
  const { login, loading, error } = auth

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login(email, password)
      navigate('/')
    } catch {
      // ?
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Авторизація</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email або логін"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Пароль"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button className="login-button" disabled={loading}>
            {loading ? 'Завантаження...' : 'Увійти'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
