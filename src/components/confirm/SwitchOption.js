import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const SwitchOption = ({
    description,
    descriptionClass,
    label,
    handleOnChange,
    disabled,
    checked,
    name,
    size,
    containerClass
}) => {
    return (
        <div className={ containerClass }>
            <span className={ descriptionClass }>{ description }</span>
            <FormControlLabel
                label={ label }
                title="Clic para cambiar"
                labelPlacement="start"
                control={
                    <Switch onChange={ handleOnChange }
                        checked={ checked }
                        name={ name }
                        size={ size }
                        color={ 'secondary' }
                    />
                }
                disabled={ disabled }
            />
        </div>
    );
};

SwitchOption.propTypes = {
    description: PropTypes.string.isRequired,
    descriptionClass: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    containerClass: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
};

SwitchOption.defaultProps = {
    size: 'medium',
    containerClass: '',
};
