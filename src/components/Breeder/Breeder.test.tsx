import { BreederContactTypeEnum } from '@cig-platform/enums'
import { breederFactory } from '@cig-platform/factories'
import { render, screen } from '@testing-library/react'

import Breeder from './Breeder'

const DEFAULT_PROPS = {
  breeder: breederFactory(),
}

describe('<Breeder />', () => {
  it('renders correctly', () => {
    render(<Breeder {...DEFAULT_PROPS} />)

    expect(screen.queryByTestId('breeder-whatsapp')).not.toBeInTheDocument()
    expect(screen.queryByTestId('breeder-phone')).not.toBeInTheDocument()
    expect(screen.getByTestId('breeder-location')).toBeInTheDocument()
    expect(screen.getByTestId('breeder-share')).toBeInTheDocument()
    expect(screen.getByText(DEFAULT_PROPS.breeder.name)).toBeInTheDocument()
    expect(screen.getByAltText(DEFAULT_PROPS.breeder.name)).toBeInTheDocument()
    expect(screen.getByText('Onde fica o criatório?')).toBeInTheDocument()
    expect(screen.getByText(DEFAULT_PROPS.breeder.address.city)).toBeInTheDocument()
    expect(screen.getByText(DEFAULT_PROPS.breeder.address.number)).toBeInTheDocument()
    expect(screen.getByText(DEFAULT_PROPS.breeder.address.province)).toBeInTheDocument()
    expect(screen.getByText(DEFAULT_PROPS.breeder.address.street)).toBeInTheDocument()
    expect(screen.getByText(DEFAULT_PROPS.breeder.address.zipcode)).toBeInTheDocument()
    expect(screen.getByTestId('map')).toBeInTheDocument()
  })

  it('renders whats app buttons', () => {
    const contacts = [
      {
        type: BreederContactTypeEnum.WHATS_APP,
        value: '(15) 99644-2031',
        id: '',
        breederId: DEFAULT_PROPS.breeder.id
      },
      {
        type: BreederContactTypeEnum.WHATS_APP,
        value: '(15) 99644-2032',
        id: '',
        breederId: DEFAULT_PROPS.breeder.id
      },{
        type: BreederContactTypeEnum.WHATS_APP,
        value: '(15) 99644-2033',
        id: '',
        breederId: DEFAULT_PROPS.breeder.id
      }
    ]

    render(<Breeder {...DEFAULT_PROPS} contacts={contacts} />)

    expect(screen.getAllByTestId('breeder-whatsapp')).toHaveLength(contacts.length)
  })

  it('renders phone buttons', () => {
    const contacts = [
      {
        type: BreederContactTypeEnum.PHONE,
        value: '(15) 3521-3556',
        id: '',
        breederId: DEFAULT_PROPS.breeder.id
      },
      {
        type: BreederContactTypeEnum.PHONE,
        value: '(15) 3521-3557',
        id: '',
        breederId: DEFAULT_PROPS.breeder.id
      },{
        type: BreederContactTypeEnum.PHONE,
        value: '(15) 3521-3558',
        id: '',
        breederId: DEFAULT_PROPS.breeder.id
      }
    ]

    render(<Breeder {...DEFAULT_PROPS} contacts={contacts} />)

    expect(screen.getAllByTestId('breeder-phone')).toHaveLength(contacts.length)
  })
})
