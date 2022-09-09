import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@cig-platform/data-helper'

import { BreederProps } from './components/Breeder/Breeder'

import BreederContainer from './containers/BreederContainer/BreederContainer'
import { Data } from './hooks/useData'

(window as any).renderBreederPage = (
  containerId: string,
  { breederId }: { breederId: string },
  { onViewPoultry, onEditPoultry }: {
    onViewPoultry?: BreederProps['onViewPoultry'];
    onEditPoultry?: BreederProps['onEditPoultry'];
  } = {},
  {
    breederData = {}
  }: {
    breederData?: Partial<Data['breeder']>
  } = {}
) => {
  const targetDocument = document.getElementById(containerId)

  if (targetDocument) {
    ReactDOM.render(
      <QueryClientProvider client={queryClient}>
        <BreederContainer
          breederId={breederId}
          onViewPoultry={onViewPoultry}
          onEditPoultry={onEditPoultry}
          breederData={breederData}
        />
      </QueryClientProvider>,
      targetDocument,
    )
  }
};

(window as any).unmountBreederPage = (containerId: string) => {
  const targetDocument = document.getElementById(containerId)

  if (targetDocument) {
    ReactDOM.unmountComponentAtNode(targetDocument)
  }
}
