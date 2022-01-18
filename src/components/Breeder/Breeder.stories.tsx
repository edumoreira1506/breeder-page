import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { breederFactory, poultryFactory } from '@cig-platform/factories'

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
  },
  contacts: [
    {
      type: 'WHATS_APP',
      value: '(15) 99644-2031',
      id: '',
      breederId: ''
    },
    {
      type: 'WHATS_APP',
      value: '(15) 99798-6248',
      id: '',
      breederId: ''
    },
    {
      type: 'PHONE',
      value: '(15) 3521-3556',
      id: '',
      breederId: ''
    }
  ],
  poultries: Array(10).fill({
    ...poultryFactory(),
    mainImage: '1634766823222-c4f8a3c6-713d-45f0-a492-49643cf32ed6.jpeg',
    images: Array(5).fill({
      imageUrl: '1634766823222-c4f8a3c6-713d-45f0-a492-49643cf32ed6.jpeg'
    })
  })
}
