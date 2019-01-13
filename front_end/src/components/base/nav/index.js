import './styles.sass'

import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    render () {
        return (
            <div className = 'nav-cnt'>
                <ul>
                    <Link to = '/about'>
                        <li>
                            <span>Сводная информация</span>
                        </li>
                    </Link>
                    <Link to = '/towns'>
                        <li>
                            <span>Города</span>
                        </li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Nav