import React from 'react'
import { render, screen } from '@testing-library/react'
import { breederFactory } from '@cig-platform/factories'

import Breeder from './Breeder'

const DEFAULT_PROPS = {
  breeder: breederFactory()
}

describe('Breeder', () => {
  it('renders the name', () => {
    render(<Breeder {...DEFAULT_PROPS} />)

    expect(screen.getByText(DEFAULT_PROPS.breeder.name)).toBeInTheDocument()
  })
})
