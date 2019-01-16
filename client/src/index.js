import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import App from './app'

console.log('store: ', store)
window.store = store // ВНИМАНИЕ

render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
)