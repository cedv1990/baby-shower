import { types } from '../types/types';

const initialState = {
    showForm: false,
    loading: false,
    msgError: null,
    initialLoadingEnded: false,
    copied: false,
    timeout: -1,
    filtered: false
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.initialLoadingEnded:
            return {
                ...state,
                initialLoadingEnded: true
            };
        case types.showConfirm:
            return {
                ...state,
                showForm: true
            };
        case types.hideConfirm:
            return {
                ...state,
                showForm: false
            };
        case types.setError:
            return {
                ...state,
                msgError: action.payload
            };
        case types.removeError:
            return {
                ...state,
                msgError: null
            };
        case types.startLoading:
            return {
                ...state,
                loading: true
            };
        case types.finishLoading:
            return {
                ...state,
                loading: false
            };
        case types.setCopied:
            return {
                ...state,
                copied: action.payload
            }
        case types.setTimeout:
            return {
                ...state,
                timeout: action.payload
            }
        case types.setFiltered:
            return {
                ...state,
                filtered: action.payload
            }
        default:
            return state;
    }
};