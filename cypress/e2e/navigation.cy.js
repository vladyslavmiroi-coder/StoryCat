describe('StoryCat E2E', () => {
  const email = 'Kaylah_Hermiston@hotmail.com'
  const password = 'FdkRCKElGLewunH'

  it('User can log in successfully', () => {
    cy.visit('/login')

    cy.contains('Авторизація')

    cy.get('input[type="text"]').type(email)
    cy.get('input[type="password"]').type(password)
    cy.get('button').click()

    cy.url().should('eq', 'http://localhost:5173/')

    cy.contains('StoryCat')
  })

  it('User can navigate through pages', () => {
    cy.visit('/login')
    cy.get('input[type="text"]').type(email)
    cy.get('input[type="password"]').type(password)
    cy.get('button').click()

    cy.contains('Каталог').click()
    cy.url().should('include', '/catalog')

    cy.get('.catalog-card').should('exist')

    cy.get('.catalog-card').first().click()
    cy.url().should('include', '/novel/')

    cy.get('.novel-wrapper').should('exist')

    cy.contains('StoryCat').click()
    cy.url().should('eq', 'http://localhost:5173/')
  })
})
