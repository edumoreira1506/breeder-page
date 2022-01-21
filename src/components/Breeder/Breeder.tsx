import React, { FC, useCallback, useMemo } from 'react'
import { IBreeder, IBreederContact, IPoultry, IPoultryImage } from '@cig-platform/types'
import { BsWhatsapp, BsShareFill } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import copy from 'copy-to-clipboard'
import { LinksBar } from '@cig-platform/ui'

import Header from '../Header/Header'
import Video from '../Video/Video'
import Images from '../Images/Images'
import Address from '../Address/Address'
import Poultries from '../Poultries/Poultries'
import GalleryModal from '../GalleryModal/GalleryModal'
import { GalleryProvider } from '../../contexts/GalleryContext/GalleryContext'
import { MARKETPLACE_URL } from '../../constants/url'

import './breeder.css'

import {
  StyledContainer,
} from './Breeder.styles'

export interface Poultry extends IPoultry {
  images?: IPoultryImage[];
  mainImage?: string;
}

export interface BreederProps {
  breeder: IBreeder;
  poultries?: Poultry[];
  contacts?: IBreederContact[];
  onViewPoultry?: (a: { breederId: string; poultryId: string }) => void;
}

const Breeder: FC<BreederProps> = ({
  breeder,
  poultries = [],
  contacts = [],
  onViewPoultry
}) => {
  const handleShareBreeder = useCallback(async () => {
    const url = `${MARKETPLACE_URL}/breeders/${breeder.id}`

    if (navigator.share) {
      const shareDetails = { url, title: breeder.name, text: `${breeder.description}: ${url}` }
      
      try {
        await navigator.share(shareDetails)
      } catch (error) {
        console.error(error)
      }
    } else {
      copy(url)

      alert('Link copiado com sucesso!')
    }
  }, [])

  const handleViewPoultry = useCallback((poultryId: string) => {
    onViewPoultry?.({ breederId: breeder?.id ?? '', poultryId })
  }, [breeder?.id, onViewPoultry])

  const linkBarItems = useMemo(() => ([
    ...contacts.filter((contact) => contact.type === 'WHATS_APP').map(contact => ({
      children: <BsWhatsapp />,
      href: `https://api.whatsapp.com/send?phone=55${contact.value.replace(/\D/g, '')}`
    })),
    ...contacts.filter((contact) => contact.type === 'PHONE').map(contact => ({
      children: <AiFillPhone />,
      href: `tel:${contact.value.replace(/\D/g, '')}`
    })),
    {
      children: <HiLocationMarker />,
      href: '#location'
    },
    {
      children: <BsShareFill />,
      onClick: handleShareBreeder
    }
  ]), [contacts])
  
  return (
    <StyledContainer>
      <LinksBar items={linkBarItems} />
      
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

        <Poultries onViewPoultry={handleViewPoultry} poultries={poultries} title="Aves" />

        <Poultries onViewPoultry={handleViewPoultry} poultries={poultries} title="Aves à venda" />

        {breeder?.address && (
          <Address address={breeder.address} />
        )}
      </GalleryProvider>
    </StyledContainer>
  )
}

export default Breeder
