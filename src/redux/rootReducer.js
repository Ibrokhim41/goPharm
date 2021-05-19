import { combineReducers } from "redux";
import { categoryReducer } from "./reducers/categoryReducer";
import { drugsReducer } from "./reducers/drugsReducer";
import { userReducer } from "./reducers/userReducer";

export const rootReducer = combineReducers({
    drugs: drugsReducer,
    categories: categoryReducer,
    user: userReducer
})