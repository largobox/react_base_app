import React from 'react'
import { connect } from 'react-redux'

class Dashboard extends React.Component {

    get header () {
        return (
            <div className = 'header-cnt'>
                <h2>{this.props.header}</h2>
            </div>            
        )
    }

    render () {
        return this.header
    }
}

export default connect(
    (state) => {
        return {
            people: state.people
        }
    }
)(Dashboard)