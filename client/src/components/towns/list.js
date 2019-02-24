import './styles.sass'

import React from 'react'
import { connect } from 'react-redux'
import { loadAllTowns, deleteTown } from '../../ac'
import { townsSelector } from '../../selectors'
import { Link } from 'react-router-dom'

class TownList extends React.Component {

    componentDidMount () {
        this.props.loadAllTowns()

        this.redirectToEdit = this.redirectToEdit.bind(this)
        this.redirectToShow = this.redirectToShow.bind(this)
    }

    redirectToEdit (ev, townId) {
        ev.stopPropagation()
        this.props.history.push(`/towns/${townId}/edit`)
    }

    redirectToShow (ev, townId) {
        ev.stopPropagation()
        this.props.history.push(`/towns/${townId}`)
    }

    redirectToDelete (ev, townId) {
        ev.stopPropagation()
        this.props.deleteTown(townId)
    }

    get list () {
        return this.props.towns.list.map( (town) => (
                <li onClick = { (ev) => this.redirectToShow(ev, town.id) } key = {town.id}>
                    <span>{town.name}</span>
                    <i onClick = { (ev) => this.redirectToEdit(ev, town.id) }>Редактировать</i>
                    <i onClick = { (ev) => this.redirectToDelete(ev, town.id) }>Удалить</i>
                </li>
            )
        )
    }

    get preloader () {
        if (this.props.towns.loading) {
            return (
                <span>Загружается...</span>
            )
        }
    }

    get header () {
        return (
            <div className = 'header-cnt'>
                <h2>{this.props.header}</h2>
            </div>            
        )
    }

    render () {
        return (
            <div>
                {this.header}
                <Link to = {'/towns/add'}>
                    <button>Добавить</button>
                </Link>
                {this.preloader}
                <ul>{ this.list }</ul>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            towns: townsSelector(state)
        }
    },
    { loadAllTowns, deleteTown }
)(TownList)