import React, { FC } from 'react'
import { IBreeder } from '@cig-platform/types'

import Header from '../../components/Header/Header'
import Video from '../../components/Video/Video'
import Images from '../../components/Images/Images'
import Address from '../../components/Address/Address'

import { StyledContainer } from './Breeder.styles'

export interface IBreederProps {
  breeder: Partial<IBreeder>;
}

const Breeder: FC<IBreederProps> = ({ breeder }: IBreederProps) => {
  return (
    <StyledContainer>
      {breeder.name && (
        <Header
          breederName={breeder.name}
          breederImageUrl={breeder.profileImageUrl}
          breederDescription={breeder.description}
        />
      )}
      {breeder.mainVideo && (
        <Video url={breeder.mainVideo} />
      )}
      {breeder?.images?.length && (
        <Images
          images={breeder.images.map(b => ({
            src: b.imageUrl.includes('data:image') ? b.imageUrl : `https://cig-maketplace.s3.sa-east-1.amazonaws.com/breeders/images/${b.imageUrl}`,
            alt: String(breeder.name)
          }))}
        />
      )}
      {breeder?.address && (
        <Address address={breeder.address} />
      )}
    </StyledContainer>
  )
}

export default Breeder
