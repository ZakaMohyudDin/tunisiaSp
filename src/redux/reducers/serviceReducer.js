import { CATEGORY, SUB_CATEGORY, SUB_SUB_CATEGORY, IS_DARK, IS_DOR } from "../constants";

let initialState = {
  categoryList: null,
  subCategoryList: null,
  isDark: false,
  isDor: false,
  subSubCategory: null,
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
    default:
      return state;
  }
};
