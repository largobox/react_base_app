import './sass/index.sass'
import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import TownList from './components/towns/list'

console.log('store: ', store)

render(
    <Provider store = {store}>
        <TownList />
    </Provider>,
    document.getElementById('root')
)