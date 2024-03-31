import { CaretRight } from '@phosphor-icons/react'
import type { StoryObj, Meta } from '@storybook/react'

import { Button } from './'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    color: 'white',
    size: 'medium',
  },
  argTypes: {
    color: {
      options: ['white', 'purple'],
      control: {
        type: 'inline-radio',
      },
    },
    icon: {
      control: false,
    },
    iconPosition: {
      options: ['left', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['small', 'medium'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<typeof Button>

export const White: StoryObj<typeof Button> = {
  args: {
    color: 'white',
  },
}

export const Purple: StoryObj<typeof Button> = {
  args: {
    color: 'purple',
  },
}

export const IconLeft: StoryObj<typeof Button> = {
  args: {
    icon: <CaretRight width={20} height={20} />,
    iconPosition: 'left',
  },
}

export const IconRight: StoryObj<typeof Button> = {
  args: {
    icon: <CaretRight width={20} height={20} />,
    iconPosition: 'right',
  },
}

export const SizeSmall: StoryObj<typeof Button> = {
  args: {
    size: 'small',
  },
}

export const SizeMedium: StoryObj<typeof Button> = {
  args: {
    size: 'medium',
  },
}

export const AsChild: StoryObj<typeof Button> = {
  args: {
    asChild: true,
    children: <a href="#">Button as Link</a>,
    icon: <CaretRight width={20} height={20} />,
    iconPosition: 'right',
  },
}
