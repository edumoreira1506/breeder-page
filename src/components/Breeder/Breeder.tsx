import React, { FC, ReactNode, useCallback, useMemo, useState } from 'react'
import { IBreeder, IBreederContact, IPoultry, IPoultryImage } from '@cig-platform/types'
import { BsWhatsapp, BsShareFill } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { CommentList, LinksBar, SocialMediaShareModal } from '@cig-platform/ui'
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
  StyledComments,
  StyledContainer,
  StyledPoultries
} from './Breeder.styles'
import reviewToCommentItem from '../../formatters/reviewToCommentItem'
import { Review } from '../../hooks/useData'

export interface Poultry extends IPoultry {
  images?: IPoultryImage[];
  mainImage?: string;
}

type LinkComponentProps = {
  identifier: string;
  params?: {
    poultryId?: string
  };
};

export interface BreederProps {
  breeder: IBreeder;
  poultries?: Poultry[];
  reviews?: Review[];
  contacts?: IBreederContact[];
  onViewPoultry?: (a: { breederId: string; poultryId: string }) => void;
  onEditPoultry?: (a: { breederId: string; poultryId: string }) => void;
  linkComponent: FC<LinkComponentProps>
}

const Breeder: FC<BreederProps> = ({
  breeder,
  contacts = [],
  onViewPoultry,
  onEditPoultry,
  reviews = [],
  linkComponent
}) => {
  const [isSocialMediaShareModalOpen, setIsSocialMediaShareModalOpen] = useState(false)

  const url = `${MARKETPLACE_URL}/breeders/${breeder.id}`
  const description = `${breeder.description}: ${url}`

  const formattedCommentList = useMemo(() => reviews.map(reviewToCommentItem), [reviews])

  const handleCloseSocialMediaShareModal = useCallback(() => {
    setIsSocialMediaShareModalOpen(false)
  }, [])

  const handleShareBreeder = useCallback(async () => {
    if (navigator.share) {
      const shareDetails = { url, title: breeder.name, text: description }
      
      try {
        await navigator.share(shareDetails)
      } catch (error) {
        console.error(error)
      }
    } else {
      setIsSocialMediaShareModalOpen(true)
    }
  }, [url, description])

  const addressIsEmpty = useMemo(() => !Object.values(breeder?.address)?.filter(Boolean)?.length, [
    breeder?.address
  ])

  const microFrontendParams = useMemo(() => ({
    breederId: breeder?.id,
    linkComponent,
  }), [breeder?.id, linkComponent])

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
      href: '#location',
      target: '_self',
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
      <SocialMediaShareModal
        isOpen={isSocialMediaShareModalOpen}
        onClose={handleCloseSocialMediaShareModal}
        url={url}
        description={description}
        title={breeder?.name}
      />

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

      <StyledComments>
        <CommentList comments={formattedCommentList} />
      </StyledComments>
    </StyledContainer>
  )
}

export default Breeder
