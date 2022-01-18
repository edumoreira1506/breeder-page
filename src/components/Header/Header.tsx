import React, { FC } from 'react'
import { RoundImage } from '@cig-platform/ui'

import {
  StyledContainer,
  StyledImageContainer,
  StyledName,
  StyledDescription,
} from './Header.styles'
import { createImageUrl } from '../../utils/url'

export interface HeaderProps {
  breederName: string;
  breederImageUrl?: string;
  breederDescription?: string;
}

const Header: FC<HeaderProps> = ({ breederName, breederImageUrl, breederDescription }: HeaderProps) => {
  return (
    <StyledContainer>
      {breederImageUrl && (
        <StyledImageContainer>
          <RoundImage
            alt={breederName}
            src={breederImageUrl.includes('data:image') ? breederImageUrl : createImageUrl({ folder: 'breeders', subfolder: 'profile', filename: breederImageUrl })}
          />
        </StyledImageContainer>
      )}
      <StyledName>{breederName}</StyledName>
      {breederDescription && <StyledDescription>{breederDescription}</StyledDescription>}
    </StyledContainer>
  )
}

export default Header
