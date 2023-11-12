import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingFamiliesData } from '../actions/family';
import { types } from '../types/types';
import { Guests } from './Guests';

export const AdminScreen = () => {
    const dispatch = useDispatch();

    const { loading, timeout, copied } = useSelector(state => state.ui);
    const { families } = useSelector(state => state.family);

    const showCopiedLink = () => {
        clearTimeout(timeout);
        dispatch({ type: types.setCopied, payload: true });
        const time = setTimeout(() => dispatch({ type: types.setCopied, payload: false }), 5000);
        dispatch({ type: types.setTimeout, payload: time });
    };

    useEffect(() => {
        if (!families || families.length === 0)
            dispatch( startLoadingFamiliesData() );
    }, [ dispatch, families ]);

    return (
        <>
            <div className="admin__guests">
                { loading && <aside className="admin__guests-loading">Cargando invitados...</aside> }

                { !loading && families && <Guests families={families} showCopiedLink={showCopiedLink} /> }
            </div>
            { <div className={`admin__guests-copied animate__animated ${ copied ? 'animate__fadeInDown' : 'animate__fadeOutUp' }`}>Invitación copiada al portapapeles 😋</div>}
        </>
    )
}
