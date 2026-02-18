import NovelRow from '../../src/components/mainPage/NovelRow'
import { MemoryRouter } from 'react-router-dom'

describe('NovelRow', () => {
  it('renders up to 8 novels', () => {
    const fakeNovels = Array.from({ length: 10 }).map((_, i) => ({
      id: String(i + 1),
      name: `Novel ${i + 1}`,
      image: 'test.jpg',
    }))

    cy.mount(
      <MemoryRouter>
        <NovelRow novels={fakeNovels} />
      </MemoryRouter>,
    )

    cy.get('.novel-card').should('have.length', 8)
  })
})
