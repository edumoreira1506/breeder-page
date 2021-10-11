import React, { FC } from 'react'
import { IBreeder } from '@cig-platform/types'

export interface IBreederProps {
  breeder: IBreeder;
}

const Breeder: FC<IBreederProps> = ({ breeder }: IBreederProps) => {
  return (
    <h1>{breeder.name}</h1>
  )
}

export default Breeder
