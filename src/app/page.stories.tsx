import type { StoryObj, Meta } from '@storybook/react'

import Home from './page'

export default {
  title: 'Pages/Home',
  component: Home,
  tags: ['autodocs'],
} as Meta<typeof Home>

export const Default: StoryObj<typeof Home> = {}
