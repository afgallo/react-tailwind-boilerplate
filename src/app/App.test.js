import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)

  const loadingMessage = screen.getByText(/Loading.../i)

  expect(loadingMessage).toBeInTheDocument()
})
