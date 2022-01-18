import React, { FC } from 'react'
import { IBreeder, IPoultry, IPoultryImage } from '@cig-platform/types'

import Header from '../Header/Header'
import Video from '../Video/Video'
import Images from '../Images/Images'
import Address from '../Address/Address'
import Poultries from '../Poultries/Poultries'
import GalleryModal from '../GalleryModal/GalleryModal'

import { StyledContainer } from './Breeder.styles'
import { GalleryProvider } from '../../contexts/GalleryContext/GalleryContext'

export interface Poultry extends IPoultry {
  images?: IPoultryImage[];
  mainImage?: string;
}

interface BreederProps {
  breeder: IBreeder;
  poultries?: Poultry[];
}

const Breeder: FC<BreederProps> = ({ breeder, poultries = [] }) => {
  return (
    <StyledContainer>
      <GalleryProvider>
        <GalleryModal />

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

        <Poultries poultries={poultries} title="Aves" />

        <Poultries poultries={poultries} title="Aves à venda" />

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
      </GalleryProvider>
    </StyledContainer>
  )
}

export default Breeder
