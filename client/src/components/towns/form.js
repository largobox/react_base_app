import './styles.sass'

import React from 'react'
import { connect } from 'react-redux'
import { addTown, loadTown, editTown } from '../../ac'
import { townSelector, townLoadedSelector } from '../../selectors'

class TownForm extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            name: '',
            square: '',
            population: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount () {
        if (this.props.match.params.id)
            this.props.loadTown(this.props.match.params.id)
    }

    handleChange (ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    handleSubmit (ev) {
        ev.preventDefault()
        const id = this.props.match.params.id

        id ? this.props.editTown(id, {...this.state}) : this.props.addTown({...this.state})
    }

    get preloader () {
        return (
            <span>Загружается...</span>
        )
    }

    get header () {
        return (
            <div className = 'header-cnt'>
                <h2>{this.props.header}</h2>
            </div>
        )
    }

    get content () {
        return (
            <div>
                {this.header}
                <form onSubmit = {this.handleSubmit}>
                    <div className = 'field-cnt'>
                        <label htmlFor = 'name'>Наименование:</label>
                        <input id = 'name'
                               name = 'name'
                               onChange = {this.handleChange}
                               defaultValue = {this.props.town.name}
                               autoComplete = 'off'
                        />
                    </div>
                    <div className = 'field-cnt'>
                        <label htmlFor = 'square'>Площадь:</label>
                        <input id = 'square'
                               name = 'square'
                               onChange = {this.handleChange}
                               defaultValue = {this.props.town.square}
                               autoComplete = 'off'
                        />
                    </div>
                    <div className = 'field-cnt'>
                        <label htmlFor = 'population'>Население:</label>
                        <input id = 'population'
                               name = 'population'
                               onChange = {this.handleChange}
                               defaultValue = {this.props.town.population}
                               autoComplete = 'off'
                        />
                    </div>
                    <input type = 'submit' value = 'Сохранить' />
                </form>
            </div>
        )
    }

    render () {
        return (
            <div>
                {this.content}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('STATE: ', state)
    return {
        loaded: townLoadedSelector(state),
        town: townSelector(state)
    }
}

export default connect(
    mapStateToProps,
    { addTown, loadTown, editTown }
)(TownForm)