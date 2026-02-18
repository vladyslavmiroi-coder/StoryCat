import { Link } from 'react-router-dom'
import './novelRow.css'

const NovelRow = ({ novels }) => {
  const visibleNovels = novels.slice(0, 8)

  return (
    <div className="row-wrapper">
      <div className="row-container">
        {visibleNovels.map((novel) => (
          <Link to={`/novel/${novel.id}`} className="novel-card" key={novel.id}>
            <img src={novel.image} alt={novel.name} />
            <p>{novel.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NovelRow
