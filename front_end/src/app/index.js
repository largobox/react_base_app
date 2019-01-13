import './styles.sass'

import React from 'react'
import Nav from '../components/base/nav'
import Content from '../components/base/content'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
    render () {
        return (
            <Router>
                <div className = 'app-cnt'>
                    <Nav />
                    <Content />
                </div>
            </Router>
        )
    }
}

export default App