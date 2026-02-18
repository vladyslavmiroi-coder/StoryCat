import useNovels from '../hooks/useNovels'
import NovelRow from '../components/mainPage/NovelRow'
import CurrentlyReading from '../components/mainPage/CurrentlyReading'

const MainPage = ({ novelsOverride }) => {
  const data = novelsOverride || useNovels()
  const { novels, loading } = data

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <NovelRow novels={novels} />
      <CurrentlyReading novels={novels} />
    </div>
  )
}

export default MainPage
