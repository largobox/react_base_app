import './styles.sass'

import React from 'react'
import Dashboard from '../../dashboard'
import TownList from '../../towns/list'
import { Route } from 'react-router-dom'
import TownItem from '../../towns/item'

class Content extends React.Component {
    render () {
        return (
            <div className = 'content-cnt'>
                <Route path = '/about' component = { () => <Dashboard header = 'Главная' /> }  />
                <Route exact path = '/towns' component = { () => <TownList header = 'Список городов' /> } />
                <Route exact path = '/towns/:id' component = {TownItem} />
            </div>
        )
    }
}

export default Content