import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SwitchOption } from './SwitchOption';
import { startConfirm } from '../../actions/family';

export const GuestsConfirmation = () => {
    const dispatch = useDispatch();
    
    const { loading } = useSelector(state => state.ui);
    const { family } = useSelector(state => state.family);

    const { id, guests } = family;

    const handleOnChange = guestId => e => {
        dispatch( startConfirm(id, guestId, e.target.name, e.target.checked) );
    };

    return guests.map(({ first_name, middle_name, last_name, second_last_name, goes, id }, i) => (
        <div key={ i }>
            <SwitchOption
                checked={ goes }
                descriptionClass="name"
                description={ `${`${ first_name } ${ middle_name }`.trim()} ${`${ last_name } ${ second_last_name }`.trim()}` }
                disabled={ loading }
                handleOnChange={ handleOnChange(id) }
                label={ goes ? '😊' : '🥺' }
                name="goes"
            />
        </div>
    ));
};
