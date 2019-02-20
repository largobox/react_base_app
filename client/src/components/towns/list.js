import React from 'react'
import { connect } from 'react-redux'
import { loadAllTowns } from '../../ac'
import { townsSelector } from '../../selectors'

class TownList extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        this.props.loadAllTowns()
    }    

    get list () {
        return this.props.towns.list.map( (town) => (
                <li key = {town.id}>{town.name}</li>
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

    render () {
        console.log('props: ', this.props)

        return (
            <div>
                <h2>{this.props.header}</h2>
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