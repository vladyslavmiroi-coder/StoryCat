import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import MainPage from './pages/MainPage'
import CatalogPage from './pages/CatalogPage'
import NovelPage from './pages/NovelPage'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<MainPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="novel/:id" element={<NovelPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
