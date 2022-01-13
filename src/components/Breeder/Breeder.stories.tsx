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
  breeder: {
    ...breederFactory({
      profileImageUrl: 'placeholder-user.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel orci ac velit convallis tincidunt vel in massa. Nullam eu elit ac tellus molestie ultrices. Nullam elit ligula, cursus sed quam id, dignissim porta arcu. Donec id convallis neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }),
  }
}
