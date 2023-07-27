import { CONTACTS_LIST, CHAT_MEMBERS, MY_CHAT } from "../constants";

let initialState = {
  contactsList: null,
  chatMembersList: null,
  myChatList: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONTACTS_LIST:
      return {
        ...state,
        contactsList: action.data,
      };
    case CHAT_MEMBERS:
      return {
        ...state,
        chatMembersList: action.data,
      };
    case MY_CHAT:
      return {
        ...state,
        myChatList: action.data,
      };
    default:
      return state;
  }
};