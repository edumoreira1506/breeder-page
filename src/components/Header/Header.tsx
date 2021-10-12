import React, { FC } from 'react'
import { RoundImage } from '@cig-platform/ui'

import {
  StyledContainer,
  StyledImageContainer,
  StyledName,
  StyledDescription,
} from './Header.styles'

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
            src={breederImageUrl.includes('data:image') ? breederImageUrl : `https://cig-maketplace.s3.sa-east-1.amazonaws.com/breeders/profile/${breederImageUrl}`}
          />
        </StyledImageContainer>
      )}
      <StyledName>{breederName}</StyledName>
      {breederDescription && <StyledDescription>{breederDescription}</StyledDescription>}
    </StyledContainer>
  )
}

export default Header
