import axios from "axios";
import { PRODUCT_DETAIL_FAILED, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_FILTER, PRODUCT_LIST_FAILED, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST
        })

        const { data } = await axios.get('/api/products');

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAIL_REQUEST
        })

        const { data } = await axios.get(`/api/products/${id}`);

        dispatch({
            type: PRODUCT_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const productFilter = (category) => async (dispatch) => {
    try {

        const { data } = await axios.get(`/api/products`);

        const  filtered = data.filter(a => a.category === category);
        dispatch({
            type: PRODUCT_FILTER,
            payload: filtered
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}