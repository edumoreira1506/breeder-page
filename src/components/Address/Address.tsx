import React, { FC } from 'react'
import GoogleMapReact from 'google-map-react'
import { IBreederAddress } from '@cig-platform/types'

import { GOOGLE_MAPS_API_KEY } from '../../constants/keys'
import Pin from '../Pin/Pin'

import {
  StyledMap,
  StyledTitle,
  StyledContainer,
  StyledAddressFieldKey,
  StyledAddressFieldValue,
  StyledAddressFields
} from './Address.styles'

export interface AddressProps {
  address: IBreederAddress
}

const Address: FC<AddressProps> = ({ address }: AddressProps) => {
  return (
    <StyledContainer>
      <StyledTitle>Onde fica o criatório?</StyledTitle>
      <StyledAddressFields>
        {address.city && (
          <>
            <StyledAddressFieldKey>Cidade:</StyledAddressFieldKey>
            <StyledAddressFieldValue>{address.city}</StyledAddressFieldValue>
          </>
        )}
        {address.province && (
          <>
            <StyledAddressFieldKey>Estado:</StyledAddressFieldKey>
            <StyledAddressFieldValue>{address.province}</StyledAddressFieldValue>
          </>
        )}
        {address.street && (
          <>
            <StyledAddressFieldKey>Rua:</StyledAddressFieldKey>
            <StyledAddressFieldValue>{address.street}</StyledAddressFieldValue>
          </>
        )}
        {address.number && (
          <>
            <StyledAddressFieldKey>Nº:</StyledAddressFieldKey>
            <StyledAddressFieldValue>{address.number}</StyledAddressFieldValue>
          </>
        )}
        {address.zipcode && (
          <>
            <StyledAddressFieldKey>CEP:</StyledAddressFieldKey>
            <StyledAddressFieldValue>{address.zipcode}</StyledAddressFieldValue>
          </>
        )}
      </StyledAddressFields>
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
    </StyledContainer>
  )
}

export default Address
