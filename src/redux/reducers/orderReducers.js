import { ORDER, ORDER_TYPE } from "../constants";

let initialState = {
  orderList: null,
  orderTypeList: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ORDER:
      return {
        ...state,
        orderList: action.data,
      };
    case ORDER_TYPE:
      return {
        ...state,
        orderTypeList: action.data,
      };
    default:
      return state;
  }
};
