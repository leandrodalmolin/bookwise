import { render, screen } from '@testing-library/react'
import { TextField } from '.'

describe('TextField component', () => {
  it('renders text field with icon', () => {
    render(<TextField icon={<span data-testid="icon" />} />)

    const inputElement = screen.getByRole('textbox')
    const iconElement = screen.getByTestId('icon')

    expect(inputElement).toBeInTheDocument()
    expect(iconElement).toBeInTheDocument()
  })

  it('focus input element when icon is clicked', () => {
    render(<TextField icon={<span data-testid="icon" />} />)

    const inputElement = screen.getByRole('textbox')
    const iconElement = screen.getByTestId('icon')

    expect(inputElement).not.toHaveFocus()
    iconElement.click()
    expect(inputElement).toHaveFocus()
  })
})
