import { IBreeder, IBreederContact, IPoultry, IReview } from '@cig-platform/types'
import { useQuery } from 'react-query'

import ContentSearchClient from '../clients/ContentSearchClient'

export type Review = IReview & {
  breederReviewer: IBreeder
}

export interface Data {
  breeder: IBreeder & { contacts: IBreederContact[] };
  poultries: IPoultry[];
  reviews: Review[];
}

export default function useData(breederId: string) {
  return useQuery<Data>(['getBreederData', breederId], () => ContentSearchClient.getBreeder(breederId))
}
