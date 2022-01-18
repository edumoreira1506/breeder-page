import { IBreeder, IBreederContact, IPoultry } from '@cig-platform/types'
import { useQuery } from 'react-query'

import ContentSearchClient from '../clients/ContentSearchClient'

interface Data {
  breeder: IBreeder & { contacts: IBreederContact[] };
  poultries: IPoultry[];
}

export default function useData(breederId: string) {
  return useQuery<Data>(['getBreederData', breederId], () => ContentSearchClient.getBreeder(breederId))
}
