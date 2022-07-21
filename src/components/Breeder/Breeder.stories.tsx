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
      id: '50aed6ec-8744-476e-a5b8-6d47d4435825',
      profileImageUrl: 'placeholder-user.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel orci ac velit convallis tincidunt vel in massa. Nullam eu elit ac tellus molestie ultrices. Nullam elit ligula, cursus sed quam id, dignissim porta arcu. Donec id convallis neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }),
    images: Array(5).fill({
      imageUrl: '1642549113288-matte-circulo.jpg'
    })
  },
  contacts: [
    {
      type: 'WHATS_APP',
      value: '(15) 99644-2031',
      id: '',
      breederId: '',
      createdAt: new Date()
    },
    {
      type: 'WHATS_APP',
      value: '(15) 99798-6248',
      id: '',
      breederId: '',
      createdAt: new Date()
    },
    {
      type: 'PHONE',
      value: '(15) 3521-3556',
      id: '',
      breederId: '',
      createdAt: new Date()
    }
  ],
  reviews: [
    {
      id: 'f2f0a17e-bb24-478e-984e-ad7a1e8568c5',
      dealId: '40f2b47d-ef3f-4850-8163-f0b0f6539633',
      advertisingId: '6249156f-b34b-4d16-8c49-02693628f3e8',
      reviewedMerchantId: 'be4da87d-2d72-460d-b0a1-11f376ec94b8',
      reviewerMerchantId: 'c4bfbcd3-c785-4c76-a2c3-1a8100802511',
      reviewerExternalId: 'c236db9e-dcf1-4893-8c5b-bb4bcead86c4',
      active: true,
      metadata: {
        dealFeedback: 'Dahora',
        merchantFeedback: 'Dahora',
        score: 4
      },
      createdAt: new Date()
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
