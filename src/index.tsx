import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@cig-platform/data-helper'

import { BreederProps } from './components/Breeder/Breeder'

import BreederContainer, { BreederContainerProps } from './containers/BreederContainer/BreederContainer'
import { Data } from './hooks/useData'

(window as any).renderBreederPage = (
  containerId: string,
  { breederId, linkComponent = Fragment }: { breederId: string, linkComponent?: BreederContainerProps['linkComponent'] },
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
          linkComponent={linkComponent}
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
