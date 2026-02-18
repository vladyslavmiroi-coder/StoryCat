import { Link } from 'react-router-dom'
import novels from '../data/novels'
import './catalog.css'

const CatalogPage = () => {
  return (
    <div className="catalog-wrapper">
      <h1>Каталог</h1>

      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Пошук по назві" />
      </div>

      <div className="catalog-grid">
        {novels.map((novel) => (
          <Link to={`/novel/${novel.id}`} className="catalog-card" key={novel.id}>
            <img src={novel.image} alt={novel.name} />
            <p>{novel.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CatalogPage
