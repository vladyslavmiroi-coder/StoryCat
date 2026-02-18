import LoginPage from '../../src/pages/LoginPage'
import * as authHook from '../../src/hooks/useAuth'
import { MemoryRouter } from 'react-router-dom'

describe('LoginPage', () => {
  it('renders login form', () => {
    cy.mount(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    )

    cy.contains('Авторизація')
    cy.get('input[type="text"]').should('exist')
    cy.get('input[type="password"]').should('exist')
    cy.contains('Увійти')
  })

  it('allows typing into inputs', () => {
    cy.mount(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    )

    cy.get('input[type="text"]').type('admin@test.com')
    cy.get('input[type="password"]').type('123456')

    cy.get('input[type="text"]').should('have.value', 'admin@test.com')
    cy.get('input[type="password"]').should('have.value', '123456')
  })

  it('shows loading state', () => {
    cy.mount(
      <MemoryRouter>
        <LoginPage
          authOverride={{
            login: () => {},
            loading: true,
            error: null,
          }}
        />
      </MemoryRouter>,
    )

    cy.contains('Завантаження...')
    cy.get('button').should('be.disabled')
  })

  it('shows error message', () => {
    cy.mount(
      <MemoryRouter>
        <LoginPage
          authOverride={{
            login: () => {},
            loading: false,
            error: 'Невірний логін',
          }}
        />
      </MemoryRouter>,
    )

    cy.contains('Невірний логін')
  })
})
