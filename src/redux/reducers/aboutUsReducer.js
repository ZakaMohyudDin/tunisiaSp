import { ABOUT_US, USAGE_POLICY } from "../constants";

let initialState = {
    about_us: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ABOUT_US:
            return {
                ...state,
                about_us: action.data,
            };
        default:
            return state;
    }
};
