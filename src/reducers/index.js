const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case 'FETCHDOGS':
            return action.payload
        default:
            return state
    }
}
export default reducer
