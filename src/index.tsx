import React from 'react'
import ReactDOM from 'react-dom'

import BreederContainer from './containers/BreederContainer/BreederContainer';

(window as any).renderBreederPage = (containerId: string, breederId: string) => {
  const targetDocument = document.getElementById(containerId)

  if (targetDocument) {
    ReactDOM.render(
      <BreederContainer breederId={breederId} />,
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
