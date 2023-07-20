import {
  GENDER,
  USER,
  TOKEN,
  IS_BLUR,
  IS_DRAWER_OPENED,
  WELCOME_SLIDER,
  WELCOME_TEXT,
  HOME_SLIDER,
} from "../constants";

let initialState = {
  currentUser: null,
  token: null,
  gender: null,
  isBlur: false,
  isDrawerOppened: false,
  welcomeSlider: null,
  homeSlider: null,
  welcomeText: null,
  serviceTypeId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        currentUser: action.data,
      };
    case TOKEN:
      return {
        ...state,
        token: action.data,
      };
    case GENDER:
      return {
        ...state,
        gender: action.data,
      };
    case IS_BLUR:
      return {
        ...state,
        isBlur: action.data,
      };
    case WELCOME_SLIDER:
      return {
        ...state,
        welcomeSlider: action.data,
      };
    case HOME_SLIDER:
      return {
        ...state,
        homeSlider: action.data,
      };
    case WELCOME_TEXT:
      return {
        ...state,
        welcomeText: action.data,
      };
    case IS_DRAWER_OPENED:
      return {
        ...state,
        isDrawerOppened: action.data,
      };
    default:
      return state;
  }
};
