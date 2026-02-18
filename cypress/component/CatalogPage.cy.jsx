import CatalogPage from '../../src/pages/CatalogPage'
import { MemoryRouter } from 'react-router-dom'

describe('CatalogPage', () => {
  it('shows loading state', () => {
    cy.mount(
      <MemoryRouter>
        <CatalogPage
          novelsOverride={{
            novels: [],
            loading: true,
          }}
        />
      </MemoryRouter>,
    )

    cy.contains('Loading...')
  })

  it('renders novels list', () => {
    const fakeNovels = [
      { id: '1', name: 'Solo Leveling', image: 'test.jpg' },
      { id: '2', name: 'Tokyo Ghoul', image: 'test.jpg' },
    ]

    cy.mount(
      <MemoryRouter>
        <CatalogPage
          novelsOverride={{
            novels: fakeNovels,
            loading: false,
          }}
        />
      </MemoryRouter>,
    )

    cy.contains('Каталог')
    cy.contains('Solo Leveling')
    cy.contains('Tokyo Ghoul')

    cy.get('.catalog-card').should('have.length', 2)
  })

  it('renders search input', () => {
    cy.mount(
      <MemoryRouter>
        <CatalogPage
          novelsOverride={{
            novels: [],
            loading: false,
          }}
        />
      </MemoryRouter>,
    )

    cy.get('input[placeholder="Пошук по назві"]').should('exist')
  })
})
