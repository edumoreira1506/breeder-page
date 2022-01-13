import { IBreeder, IPoultry } from '@cig-platform/types'
import {  useQuery } from 'react-query'

import ContentSearchClient from '../clients/ContentSearchClient'

interface Data {
  breeder: IBreeder;
  poultries: IPoultry[];
}

export default function useData(breederId: string) {
  return useQuery<Data>(['getBreederData', breederId], () => ContentSearchClient.getBreeder(breederId))
}
