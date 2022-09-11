import React, { FC } from 'react'

import Breeder, { BreederProps } from '../../components/Breeder/Breeder'
import useData, { Data } from '../../hooks/useData'

export interface BreederContainerProps {
  breederId: string;
  onViewPoultry?: BreederProps['onViewPoultry'];
  onEditPoultry?: BreederProps['onEditPoultry'];
  breederData?: Partial<Data['breeder']>;
  linkComponent:  BreederProps['linkComponent']
}

const BreederContainer: FC<BreederContainerProps> = ({
  breederId,
  onViewPoultry,
  onEditPoultry,
  breederData = {},
  linkComponent
}: BreederContainerProps) => {
  const { data, isLoading } = useData(breederId)

  if (isLoading || !data?.breeder) return null

  return (
    <Breeder
      breeder={{ ...data?.breeder, ...breederData }}
      contacts={data?.breeder?.contacts}
      poultries={data?.poultries}
      onViewPoultry={onViewPoultry}
      onEditPoultry={onEditPoultry}
      linkComponent={linkComponent}
    />
  )
}

export default BreederContainer
