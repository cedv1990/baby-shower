import React from 'react';
import PropTypes from 'prop-types';

export const ConfirmButton = ({ valid, handleShowForm, disabled }) => {
    if (!valid) {
        return <></>;
    }

    return (
        <div className="buttons large">
            <button onClick={ handleShowForm } disabled={ disabled }>
                ¡Confirma asistencia acá!
            </button>
        </div>
    );
};

ConfirmButton.propTypes = {
    valid: PropTypes.bool.isRequired,
    handleShowForm: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
};
