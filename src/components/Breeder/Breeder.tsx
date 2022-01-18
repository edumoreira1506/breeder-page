import React, { FC } from 'react'
import { IBreeder } from '@cig-platform/types'

import Header from '../Header/Header'
import Video from '../Video/Video'
import Images from '../Images/Images'
import Address from '../Address/Address'

import { StyledContainer } from './Breeder.styles'

interface BreederProps {
  breeder: IBreeder;
}

const Breeder: FC<BreederProps> = ({ breeder }) => {
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
      {Boolean(breeder?.images?.length) && (
        <Images
          images={breeder?.images?.map(b => ({
            src: b.imageUrl.includes('data:image') ? b.imageUrl : `https://cig-maketplace.s3.sa-east-1.amazonaws.com/breeders/images/${b.imageUrl}`,
            alt: String(breeder.name)
          })) ?? []}
        />
      )}
      {breeder?.address && (
        <Address address={breeder.address} />
      )}
    </StyledContainer>
  )
}

export default Breeder
