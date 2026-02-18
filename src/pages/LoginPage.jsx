import './login.css'

const LoginPage = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Авторизація</h2>

        <input type="text" placeholder="Email або логін" className="login-input" />

        <input type="password" placeholder="Пароль" className="login-input" />

        <button className="login-button">Увійти</button>
      </div>
    </div>
  )
}

export default LoginPage
