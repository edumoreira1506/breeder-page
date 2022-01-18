import React, { useMemo, VFC } from 'react'
import { PoultriesCarousel } from '@cig-platform/ui'

import { StyledCarousel, StyledContainer, StyledTitle } from './Poultries.styles'
import { Poultry } from '../Breeder/Breeder'
import { createImageUrl } from '../../utils/url'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type PoultriesProps = {
  poultries?: Poultry[];
  title: string;
}

const Poultries: VFC<PoultriesProps> = ({
  poultries = [],
  title
}: PoultriesProps) => {
  if (!poultries.length) return null

  const formattedPoultries = useMemo(() => poultries.map((poultry) => ({
    ...poultry,
    mainImage: createImageUrl({ folder: 'poultries', subfolder: 'images', filename: poultry?.mainImage }) ?? ''
  })), [poultries])

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledCarousel>
        <PoultriesCarousel
          onClickImage={console.log}
          poultries={formattedPoultries}
        />
      </StyledCarousel>
    </StyledContainer>
  )
}

export default Poultries
