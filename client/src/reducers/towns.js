import {
    LOAD_ALL_TOWNS,
    LOAD_TOWN,
    START,
    SUCCESS,
    FAIL
} from '../constants'

export default (state = {}, action) => 
{
    state.loading = false
    state.loaded = false
    state.list = []
    state.item = {}

    const { type, payload } = action

    switch (type) {
        case LOAD_TOWN + START:
            const townState = { ...state }

            townState.loading = true
            townState.loaded = false
            return townState
        case LOAD_TOWN + SUCCESS:
            console.log('REDUCERS payload: ', payload)
            const newState = { ...state }

            newState.loaded = true
            newState.item = payload
            newState.loading = false
            return newState            
        case LOAD_ALL_TOWNS + START:
            const townsState = { ...state }
            townsState.loaded = false
            townsState.loading = true
            return townsState
        case LOAD_ALL_TOWNS + SUCCESS:
            console.log('REDUCERS payload: ', payload)
            const towns = { ...state }

            towns.list = payload
            towns.loading = false
            towns.loaded = true

            return towns
        default:
            return state
    }
}