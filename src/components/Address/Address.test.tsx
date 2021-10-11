import React from 'react'
import { render, screen } from '@testing-library/react'
import { breederAddressFactory } from '@cig-platform/factories'

import Address from './Address'

const DEFAULT_PROPS = {
  address: breederAddressFactory()
}

describe('Address', () => {
  it('renders the title', () => {
    render(<Address {...DEFAULT_PROPS} />)

    expect(screen.getByText('Onde fica o criatório?')).toBeInTheDocument()
  })

  it('renders the city', () => {
    render(<Address {...DEFAULT_PROPS} />)

    expect(screen.getByText('Cidade:')).toBeInTheDocument()
    expect(screen.getByText(DEFAULT_PROPS.address.city)).toBeInTheDocument()
  })

  it('renders the province', () => {
    render(<Address {...DEFAULT_PROPS} />)

    expect(screen.getByText('Estado:')).toBeInTheDocument()
    expect(screen.getByText(DEFAULT_PROPS.address.province)).toBeInTheDocument()
  })

  it('renders the street', () => {
    render(<Address {...DEFAULT_PROPS} />)

    expect(screen.getByText('Rua:')).toBeInTheDocument()
    expect(screen.getByText(DEFAULT_PROPS.address.street)).toBeInTheDocument()
  })

  it('renders the number', () => {
    render(<Address {...DEFAULT_PROPS} />)

    expect(screen.getByText('Nº:')).toBeInTheDocument()
    expect(screen.getByText(DEFAULT_PROPS.address.number)).toBeInTheDocument()
  })

  it('renders the zipcode', () => {
    render(<Address {...DEFAULT_PROPS} />)

    expect(screen.getByText('CEP:')).toBeInTheDocument()
    expect(screen.getByText(DEFAULT_PROPS.address.zipcode)).toBeInTheDocument()
  })

  it('renders the map', () => {
    render(<Address {...DEFAULT_PROPS} />)

    expect(screen.getByTestId('map')).toBeInTheDocument()
  })
})
