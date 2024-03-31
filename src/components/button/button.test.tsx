import { render, screen } from '@testing-library/react'
import { Button } from './'

describe('Button component', () => {
  it('renders button with text content', () => {
    render(<Button>Click me</Button>)
    const buttonElement = screen.getByText('Click me')
    expect(buttonElement).toHaveRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders button with icon', () => {
    render(<Button icon={<span data-testid="icon" />}>Click me</Button>)
    const iconElement = screen.getByTestId('icon')
    expect(iconElement).toBeInTheDocument()
  })

  it('renders button as a link', () => {
    render(
      <Button asChild>
        <a href="#">Click me</a>
      </Button>,
    )
    const linkElement = screen.getByText('Click me')
    expect(linkElement).toHaveRole('link')
    expect(linkElement).not.toHaveRole('button')
  })
})
