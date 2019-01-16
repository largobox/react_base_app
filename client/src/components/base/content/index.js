import './styles.sass'

import React from 'react'
import Dashboard from '../../dashboard'
import TownList from '../../towns/list'
import { Route } from 'react-router-dom'


class Content extends React.Component {
    render () {
        return (
            <div className = 'content-cnt'>
                <span>Content block</span>
                <Route path = '/about' component = { Dashboard } />
                <Route path = '/towns' component = { TownList } />                
            </div>
        )
    }
}

export default Content