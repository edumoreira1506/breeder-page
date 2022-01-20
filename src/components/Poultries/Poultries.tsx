import React, { useCallback, useMemo, VFC } from 'react'
import { PoultriesCarousel } from '@cig-platform/ui'

import { StyledCarousel, StyledContainer, StyledTitle } from './Poultries.styles'
import { Poultry } from '../Breeder/Breeder'
import { createImageUrl } from '../../utils/url'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-image-gallery/styles/css/image-gallery.css'

import { useGalleryDispatch } from '../../contexts/GalleryContext/GalleryContext'
import { setFiles, setIsOpen } from '../../contexts/GalleryContext/galleryActions'

type PoultriesProps = {
  poultries?: Poultry[];
  title: string;
  onViewPoultry?: (poultryId: string) => void;
}

const Poultries: VFC<PoultriesProps> = ({
  poultries = [],
  title,
  onViewPoultry
}: PoultriesProps) => {
  if (!poultries.length) return null

  const dispatch = useGalleryDispatch()

  const formattedPoultries = useMemo(() => poultries.map((poultry) => ({
    ...poultry,
    mainImage: createImageUrl({ folder: 'poultries', subfolder: 'images', filename: poultry?.mainImage }) ?? ''
  })), [poultries])

  const handleClickImage = useCallback((poultryId: string) => {
    const poultry = formattedPoultries.find(p => p.id === poultryId)
    const files = [
      poultry?.mainImage,
      ...(poultry?.images?.map(poultryImage =>
        createImageUrl({ folder: 'poultries', filename: poultryImage.imageUrl, subfolder: 'images' })
      ) ?? [])
    ].filter(Boolean) as string[]

    dispatch(setFiles(files))
    dispatch(setIsOpen(true))
  }, [formattedPoultries, dispatch])

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledCarousel>
        <PoultriesCarousel
          onClickImage={handleClickImage}
          poultries={formattedPoultries}
          onViewPoultry={onViewPoultry}
        />
      </StyledCarousel>
    </StyledContainer>
  )
}

export default Poultries
