export const townsSelector = (state) => {
    return state.towns
}

export const townSelector = (state) => {
    return state.towns.item
}

export const townLoadedSelector = (state) => {
    return state.towns.loaded
}

export const townLoadingSelector = (state) => {
    return state.towns.loading
}

