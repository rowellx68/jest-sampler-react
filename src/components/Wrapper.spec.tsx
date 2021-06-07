import React from 'react'
import { render } from '@testing-library/react'
import Wrapper from 'components/Wrapper'

test('renders the correct markup', () => {
  const { container } = render(
    <Wrapper>
      <h1>This is a test</h1>
    </Wrapper>
  )

  expect(container).toMatchSnapshot()
})

test('renders the correct markup when className is passed', () => {
  const { container } = render(
    <Wrapper className="test-class">
      <h1>This is a test</h1>
    </Wrapper>
  )

  expect(container).toMatchSnapshot()
})

test('render the child element', () => {
  const { getByTestId } = render(
    <Wrapper className="test-class">
      <h1 data-testid="page-header">This is a test</h1>
    </Wrapper>
  )

  const el = getByTestId('page-header')

  expect(el).toBeInTheDocument()
})
