import axios from "axios";
import { FETCH_CATEGORY, FETCH_DRUGS, FETCH_SALES, FETCH_DRUGS_BY_CATEGORY, GET_CATEGORY_SLUG, FETCH_DRUG } from "./types";

const apiUrl = "https://test.gopharm.uz/api/v1";

export function fetchDrugs() {
    return async (dispatch) => {
        const response = await axios.get(`${apiUrl}/drugs`);
        dispatch({ type: FETCH_DRUGS, payload: response.data.results });
    };
}

export function fetchDrugsByCategory(slug) {
    return async (dispatch) => {
        const response = await axios.get(`${apiUrl}/drugs?page=1&category_slug=${slug}`)
        await dispatch({type: FETCH_DRUGS_BY_CATEGORY, payload: response.data.results})
    }
}

export function getCategorySlug(slug) {
    return (dispatch) => {
        dispatch({type: GET_CATEGORY_SLUG, payload: slug})
    }
}

export function fetchSales() {
    return async (dispatch) => {
        const response = await axios.get(`${apiUrl}/sales`);
        dispatch({type: FETCH_SALES, payload: response.data.results})
    }
}

export function fetchCategory() {
    return async (dispatch) => {
        const response = await axios.get(`${apiUrl}/categories`);
        dispatch({type: FETCH_CATEGORY, payload: response.data.results})
    };
}



export function fetchDrug(value) {
    return async dispatch => {
        const response = await axios.get(`${apiUrl}/drug/${value}?is_publish=true&region=1&lan=ru`).then(response => response.data)
        dispatch({type: FETCH_DRUG, payload: response})
    }
}