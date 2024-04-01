import { render, screen } from '@testing-library/react'
import { IconButton } from '.'

describe('IconButton component', () => {
  it('renders button with icon', () => {
    render(<IconButton icon={<span data-testid="icon" />} label="a11y text" />)

    const buttonElement = screen.getByRole('button')
    const iconElement = screen.getByTestId('icon')

    expect(buttonElement).toBeInTheDocument()
    expect(iconElement).toBeInTheDocument()
  })

  it('renders button with accessible label', () => {
    render(<IconButton icon={<span data-testid="icon" />} label="a11y text" />)
    const buttonElement = screen.getByText('a11y text')
    expect(buttonElement).toBeInTheDocument()
  })
})
