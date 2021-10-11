import React, { FC } from 'react'
import { IBreeder } from '@cig-platform/types'

import Header from '../../components/Header/Header'

import { StyledContainer } from './Breeder.styles'

export interface IBreederProps {
  breeder: Partial<IBreeder>;
}

const Breeder: FC<IBreederProps> = ({ breeder }: IBreederProps) => {
  return (
    <StyledContainer>
      {breeder.name && (
        <Header
          breederName={breeder.name}
          breederImageUrl={breeder.profileImageUrl}
          breederDescription={breeder.description}
        />
      )}
    </StyledContainer>
  )
}

export default Breeder
