import novels from '../../data/novels'
import './currentlyReading.css'
import { Link } from 'react-router-dom'

const getRandomNovels = (count) => {
  const shuffled = [...novels].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const CurrentlyReading = () => {
  const first = getRandomNovels(3)
  const second = getRandomNovels(3)
  const third = getRandomNovels(3)

  return (
    <div className="reading-wrapper">
      <h2>Зараз читають</h2>

      <div className="reading-container">
        <Column title="Новинки" items={first} />
        <Column title="Популярне" items={second} />
        <Column title="Набирає популярності" items={third} />
      </div>
    </div>
  )
}

const Column = ({ title, items }) => (
  <div className="reading-column">
    <h3>{title}</h3>

    {items.map((novel) => (
      <Link to={`/novel/${novel.id}`} className="reading-card" key={novel.id}>
        <img src={novel.image} alt={novel.name} />
        <div>
          <p className="title">{novel.name}</p>
          <p className="country">{novel.country}</p>
        </div>
      </Link>
    ))}
  </div>
)

export default CurrentlyReading
