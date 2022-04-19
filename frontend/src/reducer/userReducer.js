const initialState = {
    username: null,
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_USERNAME":
            return {
                ...state,
                username: action.payload,
            }
        default:
            return state
    }
}