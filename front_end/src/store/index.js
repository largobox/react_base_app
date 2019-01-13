import { createStore } from 'redux'

const red = () => {
    return {
        people: ['man','woman']
    }
}

const store = createStore(red)

export default store