import type { StoryObj, Meta } from '@storybook/react'
import { MagnifyingGlass } from '@phosphor-icons/react'

import { TextField } from '.'

export default {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
} as Meta<typeof TextField>

export const Default: StoryObj<typeof TextField> = {
  args: {
    placeholder: 'Placeholder',
  },
}

export const WithIcon: StoryObj<typeof TextField> = {
  args: {
    icon: <MagnifyingGlass width={24} height={24} />,
    placeholder: 'Placeholder',
  },
}
