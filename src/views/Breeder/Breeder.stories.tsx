import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { breederFactory } from '@cig-platform/factories'

import Breeder from './Breeder'

export default {
  title: 'Breeder',
  component: Breeder,
} as ComponentMeta<typeof Breeder>

const Template: ComponentStory<typeof Breeder> = (args) => <Breeder {...args} />

export const Example = Template.bind({})
Example.args = {
  breeder: breederFactory()
}
