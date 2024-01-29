import { render, screen } from '@testing-library/react'
import App from './App'

test('renders App component with Flex', () => {
  render(<App />)

  const appElement = screen.getByText(/App/i)
  const app2Element = screen.getByText(/Test/i)

  expect(appElement).toBeInTheDocument()
  expect(app2Element).toBeInTheDocument()
})
