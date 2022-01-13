import React, { FC, useMemo } from 'react'

import Breeder from '../../components/Breeder/Breeder'
import useData from '../../hooks/useData'

export interface BreederContainerProps {
  breederId: string;
}

const BreederContainer: FC<BreederContainerProps> = ({  breederId }: BreederContainerProps) => {
  const { data, isLoading } = useData(breederId)

  if (isLoading || !data?.breeder) return null

  const breeder = useMemo(() => data.breeder, [data.breeder])

  return (
    <Breeder breeder={breeder} />
  )
}

export default BreederContainer
