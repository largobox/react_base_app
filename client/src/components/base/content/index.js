import './styles.sass'

import React from 'react'
import Dashboard from '../../dashboard'
import TownList from '../../towns/list'
import { Route } from 'react-router-dom'

class Content extends React.Component {
    render () {
        return (
            <div className = 'content-cnt'>
                <Route path = '/about' component = { () => <Dashboard header = 'Главная' /> }  />
                <Route path = '/towns' component = { () => <TownList header = 'Список городов' /> } />
            </div>
        )
    }
}

export default Content