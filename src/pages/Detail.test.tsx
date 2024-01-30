import React from 'react'
import { render, screen } from '@testing-library/react'
import Detail from './Detail'

test('renders Home component', () => {
  render(<Detail />)
  expect(screen.getByText('Detail')).toBeInTheDocument()
})
