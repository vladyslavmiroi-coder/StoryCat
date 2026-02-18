describe('Authentication behavior', () => {
  const email = 'Kaylah_Hermiston@hotmail.com'
  const password = 'FdkRCKElGLewunH'

  it('shows error on wrong credentials', () => {
    cy.visit('/login')

    cy.get('input[type="text"]').type('wrong@email.com')
    cy.get('input[type="password"]').type('wrongpassword')
    cy.get('button').click()

    cy.contains('Невірний').should('exist')

    cy.url().should('include', '/login')
  })

  it('keeps user logged in after page reload', () => {
    cy.visit('/login')

    cy.get('input[type="text"]').type(email)
    cy.get('input[type="password"]').type(password)
    cy.get('button').click()

    cy.url().should('eq', 'http://localhost:5173/')

    cy.reload()

    cy.url().should('eq', 'http://localhost:5173/')
    cy.contains('StoryCat')
  })
})
