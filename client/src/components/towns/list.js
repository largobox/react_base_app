import React from 'react'
import { connect } from 'react-redux'

class TownList extends React.Component {
    render () {
        console.log('PROPS: ', this.props)

        fetch('https://limitless-falls-13737.herokuapp.com/towns')
            .then( response => response.json() )
            .then((responseObj) => {
                console.log('responseObj:', responseObj)
            })
            .catch((error) => {
                console.log('Error: ', error)
            })

        return (
            <div>
                <span className = 'title'>Список Городов</span>
            </div>  
        )
    }
}

export default connect(
    (state) => {
        return {
            towns: state.towns
        }
    }
)(TownList)