import {
    LOAD_ALL_TOWNS,
    LOAD_TOWN
} from '../constants'

export function loadAllTowns () {
    return {
        type: LOAD_ALL_TOWNS,
        callAPI: '/towns'
    }
}

export function loadTown (id) {
    return {
        type: LOAD_TOWN,
        callAPI: `/towns/${id}`,
        payload: { id }
    }
}