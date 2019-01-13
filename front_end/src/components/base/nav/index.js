import './styles.sass'

import React from 'react'

class Nav extends React.Component {
    render () {
        return (
            <div className = 'nav-cnt'>
                <ul>
                    <li>Сводная информация</li>
                    <li>Города</li>
                </ul>
            </div>
        )
    }
}

export default Nav