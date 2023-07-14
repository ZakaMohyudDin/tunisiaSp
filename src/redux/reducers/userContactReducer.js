import { USER_CONTACTS } from "../constants";

let initialState = {
    userContacts: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_CONTACTS:
            return {
                ...state,
                userContacts: action.data,
            };
        default:
            return state;
    }
};
