import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Clap from 'components/Clap'

test('renders the correct markup', () => {
  const { container } = render(<Clap />)

  expect(container).toMatchSnapshot()
})

test('renders the correct markup when clicked', () => {
  const { container } = render(<Clap />)

  const button = screen.getByTestId('clap-button')
  userEvent.click(button)

  expect(container).toMatchSnapshot()
})

test('registers correct claps when clicked')

test('does not register claps when disabled')
