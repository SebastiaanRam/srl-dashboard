import {IS_USER_AUTHENTICATED, IS_LOADING, GET_STUDY, GET_USERNAME } from "../storeconstants";

export default {
    [IS_USER_AUTHENTICATED](state) {
        return state.authenticated;
    },

    [IS_LOADING](state) {
        return state.loading;
    },

    [GET_STUDY](state) {
        return state.study;
    },

    [GET_USERNAME](state) {
        return state.username;
    }
}