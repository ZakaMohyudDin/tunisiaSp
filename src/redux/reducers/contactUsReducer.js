import { CONTACT_US } from "../constants";

let initialState = {
    contactUsInfo: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_US:
            return {
                ...state,
                contactUsInfo: action.data,
            };
        default:
            return state;
    }
};
