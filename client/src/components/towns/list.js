import './styles.sass'

import React from 'react'
import { connect } from 'react-redux'
import { loadAllTowns } from '../../ac'
import { townsSelector } from '../../selectors'
import { Link } from 'react-router-dom'

class TownList extends React.Component {

    componentDidMount () {
        this.props.loadAllTowns()
    }    

    get list () {
        return this.props.towns.list.map( (town) => (
                <Link to = {`/towns/${town.id}`} key = {town.id} >
                    <li>{town.name}</li>
                </Link>
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
    { loadAllTowns }
)(TownList)