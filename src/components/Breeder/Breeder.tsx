import React, { FC, ReactNode, useCallback, useMemo } from 'react'
import { IBreeder, IBreederContact, IPoultry, IPoultryImage } from '@cig-platform/types'
import { BsWhatsapp, BsShareFill } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import copy from 'copy-to-clipboard'
import { LinksBar } from '@cig-platform/ui'
import MicroFrontend from '@cig-platform/microfrontend-helper'
import { BreederContactTypeEnum } from '@cig-platform/enums'

import Header from '../Header/Header'
import Video from '../Video/Video'
import Images from '../Images/Images'
import Address from '../Address/Address'
import GalleryModal from '../GalleryModal/GalleryModal'
import { GalleryProvider } from '../../contexts/GalleryContext/GalleryContext'
import { MARKETPLACE_URL, POULTRY_CAROUSELS_PAGE_URL } from '../../constants/url'

import 'slick-carousel/slick/slick.css' 
import 'slick-carousel/slick/slick-theme.css'

import './breeder.css'

import {
  StyledContainer,
  StyledPoultries
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
  onEditPoultry?: (a: { breederId: string; poultryId: string }) => void;
}

const Breeder: FC<BreederProps> = ({
  breeder,
  contacts = [],
  onViewPoultry,
  onEditPoultry
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

  const addressIsEmpty = useMemo(() => !Object.values(breeder?.address)?.filter(Boolean)?.length, [
    breeder?.address
  ])

  const microFrontendParams = useMemo(() => ({
    breederId: breeder?.id
  }), [breeder?.id])

  const microFrontendCallbacks = useMemo<Record<string, any>>(() => ({
    onViewPoultry,
    onEditPoultry,
  }), [onViewPoultry, onEditPoultry])

  const linkBarItems = useMemo(() => ([
    ...contacts.filter((contact) => contact.type === BreederContactTypeEnum.WHATS_APP).map(contact => ({
      children: <BsWhatsapp data-testid="breeder-whatsapp" />,
      href: `https://api.whatsapp.com/send?phone=55${contact.value.replace(/\D/g, '')}`
    })),
    ...contacts.filter((contact) => contact.type === BreederContactTypeEnum.PHONE).map(contact => ({
      children: <AiFillPhone data-testid="breeder-phone" />,
      href: `tel:${contact.value.replace(/\D/g, '')}`
    })),
    addressIsEmpty ? undefined : {
      children: <HiLocationMarker data-testid="breeder-location" />,
      href: '#location'
    },
    {
      children: <BsShareFill data-testid="breeder-share" />,
      onClick: handleShareBreeder,
      identifier: 'breeder-share'
    }
  ].filter(Boolean) as {
    children: ReactNode;
    href?: string;
    identifier?: string;
    onClick?: () => any;
  }[]), [contacts, addressIsEmpty])
  
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

        <StyledPoultries id="poultry-carousels">
          <MicroFrontend
            params={microFrontendParams}
            name="BreederPoultriesPage"
            host={POULTRY_CAROUSELS_PAGE_URL}
            containerId="poultry-carousels"
            callbacks={microFrontendCallbacks}
          />
        </StyledPoultries>

        {!addressIsEmpty && (
          <Address address={breeder.address} />
        )}
      </GalleryProvider>
    </StyledContainer>
  )
}

export default Breeder
