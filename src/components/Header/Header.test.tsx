import React from 'react'
import { render, screen } from '@testing-library/react'
import { breederFactory } from '@cig-platform/factories'

import Header from './Header'

const DEFAULT_PROPS = {
  breederName: breederFactory().name
}

describe('Hedaer', () => {
  it('renders the breeder name', () => {
    render(<Header {...DEFAULT_PROPS} />)

    expect(screen.getByText(DEFAULT_PROPS.breederName)).toBeInTheDocument()
  })

  it('renders the image', () => {
    const breederImageUrl = 'fake-breeder-image-url.png'

    render(<Header {...DEFAULT_PROPS} breederImageUrl={breederImageUrl} />)

    const imageDocument = screen.getByAltText(DEFAULT_PROPS.breederName)

    expect(imageDocument).toBeInTheDocument()
    expect(imageDocument).toHaveAttribute('src', `https://cig-maketplace.s3.sa-east-1.amazonaws.com/breeders/profile/${breederImageUrl}`)
  })
})
