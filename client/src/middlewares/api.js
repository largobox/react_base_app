import { START, SUCCESS, FAIL } from '../constants'

export default (store) => (next) => (action) => {
    const { callAPI, type, ...rest } = action

    if (!callAPI) return next(action)

    next({
        type: type + START,
        ...rest
    })

    fetch('https://limitless-falls-13737.herokuapp.com/towns')
        .then(response => response.json())
        .then(responseObj => {
            next({ type: type + SUCCESS, payload: responseObj, ...rest})
        })
        .catch(error => next({ type: type + FAIL, payload: error, ...rest }))
}