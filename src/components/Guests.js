import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../types/types';
import { useForm } from '../hooks/useForm';
import { filterFamiliesList } from '../helpers/filters';
import { CopyDataToClipboard } from './CopyDataToClipboard';
import { formatName } from '../helpers/formatName';

export const Guests = ({ families, showCopiedLink }) => {
    const dispatch = useDispatch();

    const { filtered } = useSelector(state => state.ui);

    const [ { name }, handleInputChange ] = useForm( { name: '' } );

    const calculateClass = guests => {
        const dif = guests.length - guests.filter(g => g.goes).length;
        if (dif === 0) {
            return 'all';
        }
        else if (dif === guests.length) {
            return 'nobody';
        }
        return 'mix';
    };

    const getInviteUrl = id => `${window.location.href.replace(window.location.search, '')}?id=${id}`;

    const filter = () => dispatch({ type: types.setFiltered, payload: !filtered });
    
    const familiesView = filterFamiliesList(families, name, filtered);

    const counts = {
        families: familiesView.length,
        guests: familiesView.reduce((ac, f) => ac + f.guests.length, 0),
        confirmed: familiesView.reduce((ac, f) => ac + f.guests.filter(g => g.goes).length, 0)
    };

    const FullName = (data) => (
        <li className={ `${data.goes ? 'yes' : 'no'}` }>
            {formatName(data)}
        </li>
    );

    return (
        <>
            <div className="admin__guests-title">
                Lista de invitados
            </div>
            <div className="admin__guests-detail">
                <div className="input">
                    <input
                        type="text"
                        name="name"
                        placeholder="Filtro: nombre, familia..."
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }
                    />
                </div>
                <div><strong>Familias:</strong> { counts.families }</div>
                <div><strong>Invitados:</strong> { counts.guests }</div>
                <div 
                    className="admin__guests-filter"
                    onClick={filter}
                >
                    <strong>Confirmados:</strong> { counts.confirmed }
                </div>
            </div>
            <div className="admin__guests-copy">
                <div className="input">
                    <CopyDataToClipboard />
                </div>
            </div>
            <div className="admin__guests-container">
            {
                familiesView.length > 0
                && familiesView
                    .map(({ id, familyName, guests }) => (
                        <CopyToClipboard
                            key={ id }
                            text={getInviteUrl(id)}
                            onCopy={showCopiedLink}>
                            <div className={`admin__guests-container-row ${ calculateClass(guests) }`}>
                                <h1>{familyName}</h1>
                                <ul>
                                { guests.map((guest, i) => <FullName key={i} {...guest} />) }
                                </ul>
                            </div>
                        </CopyToClipboard>
                    ))
            }
            { familiesView.length === 0 && <div className="admin__guests-container-row error">😅 No se encontraron invitados por el filtro.</div> }
            </div>
        </>
    );
}

Guests.propTypes = {
    families: PropTypes.array.isRequired,
    showCopiedLink: PropTypes.func.isRequired
};
