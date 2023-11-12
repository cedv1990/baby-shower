import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { finishInitialLoading } from '../actions/ui';

export const Loader = () => {
    const dispatch = useDispatch();

    const { loading, initialLoadingEnded, showForm } = useSelector(state => state.ui);

    let className = 'loader ';

    if (!initialLoadingEnded) {
        setTimeout(() => dispatch( finishInitialLoading() ), 2000);
    } else if (!loading || showForm) {
        className += 'animate__animated animate__fadeOut animate__faster no-pointer';
    }
    
    return (
        <div className={className}>
        </div>
    );
}
