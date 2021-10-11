import React, { FC } from 'react'
import GoogleMapReact from 'google-map-react'
import { IBreederAddress } from '@cig-platform/types'

import { GOOGLE_MAPS_API_KEY } from '../../constants/keys'
import Pin from '../Pin/Pin'

import { StyledMap } from './Address.styles'

export interface AddressProps {
  address: IBreederAddress
}

const Address: FC<AddressProps> = ({ address }: AddressProps) => {
  return (
    <>
      {address.latitude && address.latitude && (
        <StyledMap>
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
            defaultCenter={{ lat: address.latitude, lng: address.longitude }}
            defaultZoom={11}
          >
            <Pin lat={address.latitude} lng={address.longitude} />
          </GoogleMapReact>
        </StyledMap>
      )}
    </>
  )
}

export default Address
