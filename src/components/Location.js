import React from 'react';

export const Location = React.memo(() => {
    const handleClickMap = () => {
        window.open('https://maps.app.goo.gl/CsqW18j9iEV8iG2u5', '_blank');
    };

    return (
        <div 
            className="location"
            onClick={ handleClickMap }
        >
            <i className="fas fa-map-marked-alt"></i>
            <br />
            Carrera 15 #173-25, Alameda Plaza, Salón Social
        </div>
    );
});
