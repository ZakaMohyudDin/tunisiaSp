import { ALL_SUBSCRIPTIONS, SUBSCRIPTIONS } from "../constants";

let initialState = {
    user_subscriptions: null,
    subscriptions: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ALL_SUBSCRIPTIONS:
            return {
                ...state,
                user_subscriptions: action.data,
            };
        case SUBSCRIPTIONS:
            return {
                ...state,
                subscriptions: action.data,
            };
        default:
            return state;
    }
};
