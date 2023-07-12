import { NOTIFICATION } from "../constants";

let initialState = {
  notifications: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION:
      return {
        ...state,
        notifications: action.data,
      };
    default:
      return state;
  }
};
