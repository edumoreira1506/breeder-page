import React, { FC } from 'react'

import Breeder, { BreederProps } from '../../components/Breeder/Breeder'
import useData from '../../hooks/useData'

export interface BreederContainerProps {
  breederId: string;
  onViewPoultry?: BreederProps['onViewPoultry']
}

const BreederContainer: FC<BreederContainerProps> = ({ breederId, onViewPoultry }: BreederContainerProps) => {
  const { data, isLoading } = useData(breederId)

  if (isLoading || !data?.breeder) return null

  return (
    <Breeder
      breeder={data?.breeder}
      contacts={data?.breeder?.contacts}
      poultries={data?.poultries}
      onViewPoultry={onViewPoultry}
    />
  )
}

export default BreederContainer
