import { types } from '../types/types';

export const setShowForm = () => ({
    type: types.showConfirm
});

export const setHideForm = () => ({
    type: types.hideConfirm
});

export const setError = ( err ) => ({
    type: types.setError,
    payload: err
});

export const removeError = () => ({
    type: types.removeError
});

export const startLoading = () => ({
    type: types.startLoading
});

export const finishLoading = () => ({
    type: types.finishLoading
});

export const finishInitialLoading = () => ({
    type: types.initialLoadingEnded
});