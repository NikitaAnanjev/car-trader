export const global = (store) => {
    store.on(AccountNavigationActions.init, () => ({
        global: {
            searchIsOpen: false,
        },
    }))

    store.on(store.set, (state, payload) => {
        return { global: payload }
    })
}
