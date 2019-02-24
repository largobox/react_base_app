import './styles.sass'

import React from 'react'
import { connect } from 'react-redux'
import { loadTown } from '../../ac'
import { townSelector, townLoadedSelector } from '../../selectors'

class TownItem extends React.Component {
    componentDidMount () {
        this.props.loadTown(this.props.match.params.id)
    }

    get header () {
        return (
            <div className = 'header-cnt'>
                <h2>{this.props.town.name}</h2>
            </div>
        )
    }

    get descForm () {
        return (
            <div>
                <div>
                    <b>Наименование: </b>
                    <span>{this.props.town.name}</span>
                </div>
                <div>
                    <b>Площадь: </b>
                    <span>{this.props.town.square}</span>
                </div>
                <div>
                    <b>Население: </b>
                    <span>{this.props.town.population}</span>
                </div>
            </div>
        )
    }

    get preloader () {
        return (
            <span>Загружается...</span>
        )
    }

    get content () {
        return (
            <div>
                {this.header}
                {this.descForm}
            </div>
        )
    }

    render () {
        return (
            <div>
                { this.props.loaded ? this.content : this.preloader }
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            loaded: townLoadedSelector(state),
            town: townSelector(state)
        }
    },
    { loadTown }
)(TownItem)