import React from 'react'
import ReactDOM from 'react-dom'
import { IBreeder } from '@cig-platform/types'

import Breeder from './views/Breeder/Breeder';

(window as any).renderBreederPage = (containerId: string, breeder: IBreeder) => {
  const targetDocument = document.getElementById(containerId)

  if (targetDocument) {
    ReactDOM.render(
      <Breeder breeder={breeder} />,
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
