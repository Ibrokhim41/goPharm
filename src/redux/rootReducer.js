import { combineReducers } from "redux";
import { categoryReducer } from "./reducers/categoryReducer";
import { drugsReducer } from "./reducers/drugsReducer";

export const rootReducer = combineReducers({
    drugs: drugsReducer,
    categories: categoryReducer
})