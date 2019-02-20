import {
    LOAD_ALL_TOWNS,
    START,
    SUCCESS,
    FAIL
} from '../constants'

export default (state = {}, action) => 
{
    state.loading = false
    state.list = []

    const { type, payload } = action

    switch (type) {
        case LOAD_ALL_TOWNS + START:
            state.loading = true
            return state
        case LOAD_ALL_TOWNS + SUCCESS:
            state.list = payload
            state.loading = false
            return state
        default:
            return state
    }
}