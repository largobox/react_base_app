import React from 'react'

export default class TownList extends React.Component {
    render () {
        console.log('Props: ', this.props)
        // fetch('http://localhost:3030/animals')
        //     .then( response => response.json() )
        //     .then((responseObj) => {
        //         console.log('responseObj:', responseObj)
        //     })
        //     .catch((error) => {
        //         console.log('Error: ', error)
        //     })

        return (
            <div>
                <span className = 'title'>Maow</span>
            </div>  
        )
    }
}

