import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './Home'

test('renders Home component', () => {
  render(<Home />)
  const button = screen.getByText('ab')
  //const button = screen.getByRole('label')

  expect(button).toBeInTheDocument()
})

it('what?', () => {})
