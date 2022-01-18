import React, { FC } from 'react'
import { IBreeder, IBreederContact, IPoultry, IPoultryImage } from '@cig-platform/types'
import { BsWhatsapp } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'

import Header from '../Header/Header'
import Video from '../Video/Video'
import Images from '../Images/Images'
import Address from '../Address/Address'
import Poultries from '../Poultries/Poultries'
import GalleryModal from '../GalleryModal/GalleryModal'

import './breeder.css'

import {
  StyledContainer,
  StyledItem,
  StyledItems
} from './Breeder.styles'
import { GalleryProvider } from '../../contexts/GalleryContext/GalleryContext'

export interface Poultry extends IPoultry {
  images?: IPoultryImage[];
  mainImage?: string;
}

interface BreederProps {
  breeder: IBreeder;
  poultries?: Poultry[];
  contacts?: IBreederContact[]
}

const Breeder: FC<BreederProps> = ({ breeder, poultries = [], contacts = [] }) => {
  return (
    <StyledContainer>
      <StyledItems>
        {contacts.filter((contact) => contact.type === 'WHATS_APP').map(contact => (
          <StyledItem key={contact.id}>
            <a target="_blank" href={`https://api.whatsapp.com/send?phone=55${contact.value.replace(/\D/g, '')}`} rel="noreferrer">
              <BsWhatsapp />
            </a>
          </StyledItem>
        ))}

        {contacts.filter((contact) => contact.type === 'PHONE').map(contact => (
          <StyledItem key={contact.id}>
            <a href={`tel:${contact.value.replace(/\D/g, '')}`}>
              <AiFillPhone />
            </a>
          </StyledItem>
        ))}

        <StyledItem>
          <a href="#location">
            <HiLocationMarker />
          </a>
        </StyledItem>
      </StyledItems>
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

        {Boolean(breeder?.images?.length) && (
          <Images
            images={breeder?.images?.map(b => ({
              src: b.imageUrl.includes('data:image') ? b.imageUrl : `https://cig-maketplace.s3.sa-east-1.amazonaws.com/breeders/images/${b.imageUrl}`,
              alt: String(breeder.name)
            })) ?? []}
          />
        )}

        <Poultries poultries={poultries} title="Aves" />

        <Poultries poultries={poultries} title="Aves à venda" />

        {breeder?.address && (
          <Address address={breeder.address} />
        )}
      </GalleryProvider>
    </StyledContainer>
  )
}

export default Breeder
