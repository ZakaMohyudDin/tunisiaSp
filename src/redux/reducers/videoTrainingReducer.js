import { TRAINING_SERVICE } from "../constants";

let initialState = {
    trainingServices: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TRAINING_SERVICE:
            return {
                ...state,
                trainingServices: action.data,
            };
        default:
            return state;
    }
};
