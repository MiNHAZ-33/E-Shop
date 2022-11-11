import { PRODUCT_DETAIL_FAILED, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_FILTER, PRODUCT_LIST_FAILED, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

export const productListReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const productDetailReducer = (state = {product: {reviews: []}}, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_DETAIL_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAIL_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const productFilterReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case PRODUCT_FILTER:
            return { loading: true, products: action.payload }
        default:
            return state;
    }
}