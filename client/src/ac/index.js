import {
    LOAD_ALL_TOWNS,
    LOAD_TOWN,
    ADD_TOWN,
    EDIT_TOWN,
    DELETE_TOWN
} from '../constants'

export function loadAllTowns () {
    return {
        type: LOAD_ALL_TOWNS,
        callAPI: '/towns',
        method: 'GET'
    }
}

export function loadTown (id) {
    return {
        type: LOAD_TOWN,
        callAPI: `/towns/${id}`,
        method: 'GET'
    }
}

export function addTown (obj) {
    const formData = new FormData()

    for (let key in obj) {
        obj[key]
        formData.append(key, obj[key])
    }

    return {
        type: ADD_TOWN,
        callAPI: `/towns`,
        method: 'POST',
        body: formData
    }
}

export function editTown (id, obj) {
    const formData = new FormData()

    for (let key in obj) {
        obj[key]
        formData.append(key, obj[key])
    }

    return {
        type: EDIT_TOWN,
        callAPI: `/towns/${id}`,
        method: 'POST',
        body: formData
    }
}

export function deleteTown (id) {
    return {
        type: DELETE_TOWN,
        callAPI: `/towns/${id}`,
        method: 'DELETE'
    }
}