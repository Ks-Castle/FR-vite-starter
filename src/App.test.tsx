import { render, screen } from '@testing-library/react'
import App from './App'

test('renders App component with Flex', () => {
  render(<App />)

  expect(screen.getByText('Loading...')).toBeInTheDocument()
})
