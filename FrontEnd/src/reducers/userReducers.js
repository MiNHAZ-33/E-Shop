import { USER_DELETE_FAILED, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DETAILS_FAILED, USER_DETAILS_REQUEST, USER_DETAILS_RESET, USER_DETAILS_SUCCESS, USER_EDIT_FAILED, USER_EDIT_REQUEST, USER_EDIT_RESET, USER_EDIT_SUCCESS, USER_GENERATE_TOKEN_FAILED, USER_GENERATE_TOKEN_REQUEST, USER_GENERATE_TOKEN_SUCCESS, USER_GET_TOKEN_FAILED, USER_GET_TOKEN_REQUEST, USER_GET_TOKEN_SUCCESS, USER_LIST_FAILED, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_RECHARGE_FAILED, USER_RECHARGE_REQUEST, USER_RECHARGE_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_FAILED, USER_UPDATE_REQUEST, USER_UPDATE_RESET, USER_UPDATE_SUCCESS } from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_LOGIN_FAILED:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state;
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_REGISTER_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true }
        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload }
        case USER_DETAILS_RESET:
            return { user: {} }
        case USER_DETAILS_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return { loading: true }
        case USER_UPDATE_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }
        case USER_UPDATE_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


export const userListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { loading: true }
        case USER_LIST_SUCCESS:
            return { loading: false, users: action.payload }
        case USER_LIST_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DELETE_REQUEST:
            return { loading: true }
        case USER_DELETE_SUCCESS:
            return { loading: false, success: true }
        case USER_DELETE_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const userUpdateReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_EDIT_REQUEST:
            return { loading: true }
        case USER_EDIT_SUCCESS:
            return { loading: false, success: true }
        case USER_EDIT_RESET:
            return { user: {} }
        case USER_EDIT_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const generateTokenReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_GENERATE_TOKEN_REQUEST:
            return { loading: true }
        case USER_GENERATE_TOKEN_SUCCESS:
            return { loading: false, success: true }
        case USER_GENERATE_TOKEN_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

// export const getTokenReducer = (state = { tokens: [] }, action) => {
//     switch (action.type) {
//         case USER_GENERATE_TOKEN_REQUEST:
//             return { loading: true }
//         case USER_GENERATE_TOKEN_SUCCESS:
//             return { loading: false, success: true, tokens: action.payload }
//         case USER_GENERATE_TOKEN_FAILED:
//             return { loading: false, error: action.payload }
//         default:
//             return state;
//     }
// }


export const getTokenReducer = (state = { tokens: [] }, action) => {
    switch (action.type) {
        case USER_GET_TOKEN_REQUEST:
            return { loading: true }
        case USER_GET_TOKEN_SUCCESS:
            return { loading: false, success: true, tokens: action.payload}
        case USER_GET_TOKEN_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


export const userRechargeReducer = (state = { }, action) => {
    switch (action.type) {
        case USER_RECHARGE_REQUEST:
            return { loading: true }
        case USER_RECHARGE_SUCCESS:
            return { loading: false, success: true }
        case USER_RECHARGE_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}