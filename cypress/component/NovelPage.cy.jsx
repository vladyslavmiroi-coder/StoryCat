import NovelPage from '../../src/pages/NovelPage'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('NovelPage', () => {
  it('shows loading state', () => {
    cy.mount(
      <MemoryRouter initialEntries={['/novel/1']}>
        <Routes>
          <Route
            path="/novel/:id"
            element={
              <NovelPage
                novelOverride={{
                  novel: null,
                  loading: true,
                  error: null,
                }}
              />
            }
          />
        </Routes>
      </MemoryRouter>,
    )

    cy.contains('Loading...')
  })

  it('shows error message', () => {
    cy.mount(
      <MemoryRouter initialEntries={['/novel/1']}>
        <Routes>
          <Route
            path="/novel/:id"
            element={
              <NovelPage
                novelOverride={{
                  novel: null,
                  loading: false,
                  error: 'Error loading novel',
                }}
              />
            }
          />
        </Routes>
      </MemoryRouter>,
    )

    cy.contains('Error loading novel')
  })

  it('renders novel data', () => {
    const fakeNovel = {
      name: 'Solo Leveling',
      image: 'test.jpg',
      author: 'Author',
      status: 'Completed',
      genres: 'Action',
      tags: 'Tag1',
      views: 100,
      updated: 'Today',
      description: 'Test description',
    }

    cy.mount(
      <MemoryRouter initialEntries={['/novel/1']}>
        <Routes>
          <Route
            path="/novel/:id"
            element={
              <NovelPage
                novelOverride={{
                  novel: fakeNovel,
                  loading: false,
                  error: null,
                }}
              />
            }
          />
        </Routes>
      </MemoryRouter>,
    )

    cy.contains('Solo Leveling')
    cy.contains('Author')
    cy.contains('Test description')
  })
})
