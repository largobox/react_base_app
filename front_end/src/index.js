import './sass/index.sass'
import React from 'react'
import { render } from 'react-dom'
import AnimalList from './js/animals/list'

render(
    <AnimalList />, 
    document.getElementById('root')
)