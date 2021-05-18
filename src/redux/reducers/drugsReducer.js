import { FETCH_DRUGS, FETCH_SALES, FETCH_DRUGS_BY_CATEGORY, FETCH_DRUG } from "../types";

const initialState = {
    allDrugs: [],
    sales: [],
    category: [],
    name: "",
    drug: {}
};

export const drugsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SALES:
            return { ...state, sales: action.payload };
        case FETCH_DRUGS_BY_CATEGORY:
            return { ...state, category: state.category.concat(action.payload) };
        case FETCH_DRUG:
            return {...state, drug: action.payload}
        default:
            return state;
    }
};
