import React from 'react'
import { render } from '@testing-library/react'
import { Joke, getJoke } from 'services/jokes-service'
import JokeBox from 'components/JokeBox'

jest.mock('services/jokes-service')
const getJokeMocked = getJoke as jest.MockedFunction<typeof getJoke>

const baseJoke: Joke = {
  id: 1,
  type: 'general',
  setup: 'What does the Lochness monster call his favorite dish?',
  punchline: 'Fish & Ships',
}

test('renders the correct markup', async () => {
  getJokeMocked.mockResolvedValueOnce(baseJoke)

  const { container, findByText } = render(<JokeBox />)

  await findByText('Fish & Ships')

  expect(container).toMatchSnapshot()
})

test('joke changes when another joke button is pressed')
