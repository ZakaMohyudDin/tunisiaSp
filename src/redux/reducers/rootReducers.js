import { combineReducers } from "redux";
import authReducer from "./authReducer";
import serviceReducer from "./serviceReducer";
import notificationReducer from "./notificationReducer";
import orderReducers from "./orderReducers";
import contactUsReducer from "./contactUsReducer";
import userContactReducer from "./userContactReducer";
import usersMessagesReducer from "./usersMessagesReducer";
import usagePolicyReducer from "./usagePolicyReducer";
import aboutUsReducer from "./aboutUsReducer";
import servicesReducer from "./servicesReducer";

const rootReducer = combineReducers({
    authReducer,
    serviceReducer,
    notificationReducer,
    orderReducers,
    contactUsReducer,
    userContactReducer,
    usersMessagesReducer,
    usagePolicyReducer,
    aboutUsReducer,
    servicesReducer
});

export default rootReducer;