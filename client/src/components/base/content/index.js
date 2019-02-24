import './styles.sass'

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../../dashboard'
import TownList from '../../towns/list'
import TownItem from '../../towns/item'
import TownForm from '../../towns/form'

class Content extends React.Component {
    addForm (props) {
        return <TownForm {...props} header = 'Форма добавления' />
    }

    editForm (props) {
        return <TownForm {...props} header = 'Форма редактирования' />
    }

    townList (props) {
        return <TownList {...props} header = 'Список городов' />
    }

    render () {
        return (
            <div className = 'content-cnt'>
                <Switch>
                    <Route path = '/about' component = { () => <Dashboard header = 'Главная' /> }  />
                    <Route exact path = '/towns' component = {this.townList} /> } />
                    <Route path = '/towns/add' component = {this.addForm} />
                    <Route path = '/towns/:id/edit' component = {this.editForm} />
                    <Route path = '/towns/:id' component = {TownItem} />
                    <Route path = '*' render = { () => <h2>Ничего не найдено</h2> } />
                </Switch>
            </div>
        )
    }
}

export default Content