import { NOTIFICATION, SERVICES } from "../constants";

let initialState = {
    services: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SERVICES:
            return {
                ...state,
                services: action.data,
            };
        default:
            return state;
    }
};
