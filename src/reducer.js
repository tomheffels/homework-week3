import ADD_MODEL from './actions/ADD_MODEL';

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case ADD_MODEL:
            return [...state, action.payload]
        default:
            return state
    }
}

export default reducer