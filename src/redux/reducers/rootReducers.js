import { combineReducers } from "redux";
import authReducer from "./authReducer";
import serviceReducer from "./serviceReducer";
import notificationReducer from "./notificationReducer";
import orderReducers from "./orderReducers";

const rootReducer = combineReducers({
    authReducer,
    serviceReducer,
    notificationReducer,
    orderReducers,
});

export default rootReducer;