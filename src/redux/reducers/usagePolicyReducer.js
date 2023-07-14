import { USAGE_POLICY } from "../constants";

let initialState = {
    usage_policy: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USAGE_POLICY:
            return {
                ...state,
                usage_policy: action.data,
            };
        default:
            return state;
    }
};
