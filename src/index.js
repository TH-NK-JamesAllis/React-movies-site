import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/store'

// Render the main component into the dom
ReactDOM.render((
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
), document.getElementById('app'))
