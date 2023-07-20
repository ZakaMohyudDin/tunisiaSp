import { ALL_SUBSCRIPTIONS, USER_PROFITS } from "../constants";

let initialState = {
    user_profits: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_PROFITS:
            return {
                ...state,
                user_profits: action.data,
            };
        default:
            return state;
    }
};
