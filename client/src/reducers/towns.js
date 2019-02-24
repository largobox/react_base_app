import {
    LOAD_ALL_TOWNS,
    LOAD_TOWN,
    ADD_TOWN,
    EDIT_TOWN,
    DELETE_TOWN,

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
            const towns = { ...state }

            towns.list = payload
            towns.loading = false
            towns.loaded = true
            return towns
        case ADD_TOWN + START:
            console.log('ADD_TOWN + START')
            return state
        case ADD_TOWN + SUCCESS:
            console.log('ADD_TOWN + SUCCESS')
            return state
        case EDIT_TOWN + START:
            console.log('EDIT_TOWN + START')
            return state
        case EDIT_TOWN + SUCCESS:
            console.log('EDIT_TOWN + SUCCESS')
            return state
        case DELETE_TOWN + START:
            console.log('DELETE_TOWN + START')
            return state
        case DELETE_TOWN + SUCCESS:
            console.log('DELETE_TOWN + SUCCESS')
            return state
        default:
            return state
    }
}