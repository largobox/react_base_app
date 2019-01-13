import './styles.sass'

import React from 'react'
import Nav from '../components/base/nav'
import Content from '../components/base/content'

class App extends React.Component {
    render () {
        return (
            <div className = 'app-cnt'>
                <Nav />
                <Content />
            </div>
        )
    }
}

export default App