import type { StoryObj, Meta } from '@storybook/react'

import { IconButton } from '.'
import { X } from '@phosphor-icons/react'

export default {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta<typeof IconButton>

export const Default: StoryObj<typeof IconButton> = {
  args: {
    icon: <X width={24} height={24} />,
    label: 'Accessible Text',
  },
}
