import {
  CATEGORY,
  SUB_CATEGORY,
  SUB_SUB_CATEGORY,
  IS_DARK,
  IS_DOR,
  USER_TYPE_ID,
  SERVICE_TYPES,
  USER_SERVICE_RESPONSE,
  AVAILABLE_DAYS,
  CITIES,
} from "../constants";

let initialState = {
  categoryList: null,
  subCategoryList: null,
  isDark: false,
  isDor: false,
  subSubCategory: null,
  userTypeId: null,
  serviceTypesList: null,
  userServiceResponse: null,
  availableDays: null,
  cities: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY:
      return {
        ...state,
        categoryList: action.data,
      };
    case SUB_CATEGORY:
      return {
        ...state,
        subCategoryList: action.data,
      };
    case SUB_SUB_CATEGORY:
      return {
        ...state,
        subSubCategory: action.data,
      };
    case IS_DARK:
      return {
        ...state,
        isDark: action.data,
      };
    case IS_DOR:
      return {
        ...state,
        isDor: action.data,
      };
    case USER_TYPE_ID:
      return {
        ...state,
        userTypeId: action.data,
      };
    case SERVICE_TYPES:
      return {
        ...state,
        serviceTypesList: action.data,
      };
    case USER_SERVICE_RESPONSE:
      return {
        ...state,
        userServiceResponse: action.data,
      };
    case AVAILABLE_DAYS:
      return {
        ...state,
        availableDays: action.data,
      };
    case CITIES:
      return {
        ...state,
        cities: action.data,
      };
    default:
      return state;
  }
};
