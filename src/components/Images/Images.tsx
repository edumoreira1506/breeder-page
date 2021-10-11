import React, { FC } from 'react'
import { ImagesCarousel } from '@cig-platform/ui'

import { StyledContainer, StyledTitle } from './Images.styles'

export interface ImagesProps {
  images: {
    src: string;
    alt: string;
  }[]
}

const Images: FC<ImagesProps> = ({ images }: ImagesProps) => {
  return (
    <StyledContainer>
      <StyledTitle>Fotos do criatório</StyledTitle>
      <ImagesCarousel images={images} onClickImage={() => undefined} />
    </StyledContainer>
  )
}

export default Images
