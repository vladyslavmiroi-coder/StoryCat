import { Link } from 'react-router-dom'
import './header.css'

import bellIcon from '../assets/notification.png'
import userIcon from '../assets/user.png'
import menuIcon from '../assets/menu-bar.png'

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        StoryCat
      </Link>

      <nav className="nav">
        <Link to="/catalog">Каталог</Link>
        <Link to="/search">Пошук</Link>
        <Link to="/forum">Форум</Link>
      </nav>

      <div className="icons">
        <img src={bellIcon} alt="Сповіщення" className="header-icon-img" />
        <img src={userIcon} alt="Профіль" className="header-icon-img" />
        <img src={menuIcon} alt="Меню" className="header-icon-img" />
      </div>
    </header>
  )
}

export default Header
