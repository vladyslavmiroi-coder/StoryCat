import MainPage from '../../src/pages/MainPage'
import { MemoryRouter } from 'react-router-dom'

describe('MainPage', () => {
  it('shows loading state', () => {
    cy.mount(
      <MemoryRouter>
        <MainPage
          novelsOverride={{
            novels: [],
            loading: true,
          }}
        />
      </MemoryRouter>,
    )

    cy.contains('Loading...')
  })

  it('renders child components', () => {
    const fakeNovels = Array.from({ length: 8 }).map((_, i) => ({
      id: String(i + 1),
      name: `Novel ${i + 1}`,
      image: 'test.jpg',
      country: 'Japan',
    }))

    cy.mount(
      <MemoryRouter>
        <MainPage
          novelsOverride={{
            novels: fakeNovels,
            loading: false,
          }}
        />
      </MemoryRouter>,
    )

    cy.get('.novel-card').should('exist')
    cy.get('.reading-card').should('exist')
  })
})
