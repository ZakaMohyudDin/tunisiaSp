import { USERS_MESSAGES } from "../constants";

let initialState = {
    usersMessages: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USERS_MESSAGES:
            return {
                ...state,
                usersMessages: action.data,
            };
        default:
            return state;
    }
};
