import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './app'

// console.log('store: ', store)
window.store = store // ВНИМАНИЕ

render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)