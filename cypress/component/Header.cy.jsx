import Header from '../../src/layout/Header'
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
  it('renders logo', () => {
    cy.mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    cy.contains('StoryCat')
  })

  it('renders navigation links', () => {
    cy.mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    cy.contains('Каталог')
    cy.contains('Пошук')
    cy.contains('Форум')

    cy.get('a[href="/catalog"]').should('exist')
    cy.get('a[href="/search"]').should('exist')
    cy.get('a[href="/forum"]').should('exist')
  })

  it('renders icons', () => {
    cy.mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    cy.get('img[alt="Сповіщення"]').should('exist')
    cy.get('img[alt="Профіль"]').should('exist')
    cy.get('img[alt="Меню"]').should('exist')
  })
})
