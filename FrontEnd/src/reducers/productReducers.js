import { PRODUCT_CREATE_FAILED, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_RESET, PRODUCT_CREATE_REVIEW_FAILED, PRODUCT_CREATE_REVIEW_REQUEST, PRODUCT_CREATE_REVIEW_RESET, PRODUCT_CREATE_REVIEW_SUCCESS, PRODUCT_CREATE_SUCCESS, PRODUCT_DELETE_FAILED, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DETAIL_FAILED, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_FILTER, PRODUCT_LIST_FAILED, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_UPDATE_FAILED, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_RESET, PRODUCT_UPDATE_SUCCESS } from "../constants/productConstants";

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

export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true }
        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_DELETE_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true }
        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case PRODUCT_CREATE_RESET:
            return { }
        case PRODUCT_CREATE_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const productUpdateReducer = (state = {product: {}}, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true }
        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case PRODUCT_UPDATE_RESET:
            return { product : {}}
        case PRODUCT_UPDATE_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


export const productCreateReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return { loading: true }
        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_CREATE_REVIEW_RESET:
            return { }
        case PRODUCT_CREATE_REVIEW_FAILED:
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