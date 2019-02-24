import { START, SUCCESS, FAIL } from '../constants'

export default (store) => (next) => (action) => {
    const { callAPI, type, ...rest } = action

    if (!callAPI) return next(action)

    next({
        type: type + START,
        ...rest
    })

    fetch('https://limitless-falls-13737.herokuapp.com' + callAPI, {
            method: action.method,
            body: action.body
        })
        .then(response => response.json())
        .then(responseObj => {
            console.log('API RESPONSE: ', responseObj)
            console.log('API TYPE: ', type + SUCCESS)

            next({ type: type + SUCCESS, payload: responseObj, ...rest})
        })
        .catch(error => next({ type: type + FAIL, payload: error, ...rest }))
}