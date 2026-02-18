import { useParams } from 'react-router-dom'
import useNovel from '../hooks/useNovel'
import '../components/novelPage/novelPage.css'

const NovelPage = ({ novelOverride }) => {
  const { id } = useParams()
  const { novel, loading, error } = novelOverride || useNovel(id)

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!novel) return <div>Новела не знайдена</div>

  return (
    <div className="novel-wrapper">
      <h1>{novel.name}</h1>

      <div className="novel-content">
        <img src={novel.image} alt={novel.name} />

        <div className="novel-info">
          <p>
            <b>Автор:</b> {novel.author}
          </p>
          <p>
            <b>Статус:</b> {novel.status}
          </p>
          <p>
            <b>Жанри:</b> {novel.genres}
          </p>
          <p>
            <b>Теги:</b> {novel.tags}
          </p>
          <p>
            <b>Всього переглядів:</b> {novel.views}
          </p>
          <p>
            <b>Останнє оновлення:</b> {novel.updated}
          </p>
          <p>
            <b>Опис:</b> {novel.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default NovelPage
