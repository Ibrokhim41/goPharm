import { FETCH_CATEGORY, GET_CATEGORY_SLUG, SET_CATEGORY_TITLE } from "../types";

const initialState = {
    category: [],
    title: "",
    slug: ""
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORY:          
            return {...state, category: action.payload}
        case GET_CATEGORY_SLUG:
            return {...state, slug: action.payload}
        default:
            return state;   
    }
}