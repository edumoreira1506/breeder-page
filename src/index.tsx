import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App';

(window as any).renderBreederPage = (containerId: string) => {
  ReactDOM.render(
    <App />,
    document.getElementById(containerId),
  )
};

(window as any).unmountBreederPage = (containerId: string) => {
  const targetDocument = document.getElementById(containerId)

  if (targetDocument) {
    ReactDOM.unmountComponentAtNode(targetDocument)
  }
}

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  ReactDOM.render(<App />, document.getElementById('root'))
}
