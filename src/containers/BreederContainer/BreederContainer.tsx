import React, { FC } from 'react'

import Breeder from '../../components/Breeder/Breeder'
import useData from '../../hooks/useData'

export interface BreederContainerProps {
  breederId: string;
}

const BreederContainer: FC<BreederContainerProps> = ({  breederId }: BreederContainerProps) => {
  const { data, isLoading } = useData(breederId)

  if (isLoading || !data?.breeder) return null

  return (
    <Breeder breeder={data?.breeder} />
  )
}

export default BreederContainer
