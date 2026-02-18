import CurrentlyReading from '../../src/components/mainPage/CurrentlyReading'
import { MemoryRouter } from 'react-router-dom'

describe('CurrentlyReading', () => {
  it('renders three columns', () => {
    const fakeNovels = Array.from({ length: 9 }).map((_, i) => ({
      id: String(i + 1),
      name: `Novel ${i + 1}`,
      image: 'test.jpg',
      country: 'Japan',
    }))

    cy.mount(
      <MemoryRouter>
        <CurrentlyReading novels={fakeNovels} />
      </MemoryRouter>,
    )

    cy.contains('Новинки')
    cy.contains('Популярне')
    cy.contains('Набирає популярності')

    cy.get('.reading-card').should('exist')
  })
})
