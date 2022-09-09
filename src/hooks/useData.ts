import { IBreeder, IBreederContact, IPoultry, IReview } from '@cig-platform/types'
import { useData as useDataFromDataHelper } from '@cig-platform/data-helper'

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
  return useDataFromDataHelper<Data>(
    'getBreederData',
    () => ContentSearchClient.getBreeder(breederId),
    [breederId],
    {}
  )
}
