import { USER_LOGIN } from "../types";

const initialState = {
    info: {}
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state, sales: action.payload };
        default:
            return state;
    }
};
