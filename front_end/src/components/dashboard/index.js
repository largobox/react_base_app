import React from 'react'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
    render () {
        return (
            <div>
                <span>Сводная информация</span>
            </div>  
        )
    }
}


export default connect(
    (state) => {
        return {
            people: state.people
        }
    }
)(Dashboard)