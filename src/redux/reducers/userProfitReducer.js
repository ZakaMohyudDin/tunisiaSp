import { USER_PROFITS, PROFIT_HISTORY } from "../constants";

let initialState = {
    user_profits: null,
    profitHistory: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_PROFITS:
            return {
                ...state,
                user_profits: action.data,
            };
        case PROFIT_HISTORY:
            return {
                ...state,
                profitHistory: action.data,
            };
        default:
            return state;
    }
};
