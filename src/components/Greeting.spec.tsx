import React from 'react'
import { render } from '@testing-library/react'
import Greeting from './Greeting'

test('renders correct markup', () => {
  const date = new Date(2000, 1, 1, 12, 30)
  jest.spyOn(global.Date, 'now').mockImplementation(() => date.valueOf())

  const { container } = render(<Greeting />)

  expect(container).toMatchSnapshot()
})
