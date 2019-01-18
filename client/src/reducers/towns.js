import { LOAD_ALL_TOWNS } from '../constants'

export default (state = [], action) => 
{
    const { type, payload } = action

    switch (type) {
        case LOAD_ALL_TOWNS:
            console.log('Reducer: ', action)
        default:
            return ['Maow', 'Maow']
    }
}