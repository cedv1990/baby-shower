import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowForm } from '../actions/ui';
import { ConfirmButton } from './confirm/ConfirmButton';
import { Location } from './Location';

export const WelcomeScreen = () => {
    const dispatch = useDispatch();

    const { family } = useSelector(state => state.family);

    const { loading } = useSelector(state => state.ui);

    const handleShowForm = () => {
        const container = document.querySelector('.container');
        container.classList.remove('animate__backInLeft');
        container.classList.add('animate__backOutLeft');
        setTimeout(() => dispatch( setShowForm() ), 200);
    };

    const valid = Object.keys(family).length;

    if (valid) {
        document.title = `¡Bienveni@ ${ family.family_name }!`;
    }

    return (
        <aside className="container animate__animated animate__backInLeft animate__faster">
            <div className="notice">
                ¡{ valid ? `Hola ${ family.family_name }` : (<>Bienvenid<small>@</small> al baby shower de Miranda</>) }!
            </div>
            {
                family.guests
                ?
                    <div className="little-words">
                        Nos llena de emoción celebrar junto a { family.guests.length > 1 ? 'ustedes' : 'ti' },
                        <br />
                        que { family.guests.length > 1 ? 'son' : 'eres' } especial{ family.guests.length > 1 ? 'es' : '' } para nosotros,
                        <br />
                        el baby shower de nuestra hija
                    </div>
                :
                    <div className="little-words">
                        Nos llena de emoción celebrar el baby shower junto a ustedes de
                    </div>
            }
            <div className="couple-names">
                Miranda
            </div>
            <div className="words">
                Llegaré en poco tiempo, mis papitos y yo queremos compartir contigo esta alegría.
            </div>
            <div className="little-words">
                Cover: Pañales Winny<br />
                Presente: Obsequio o lluvia de sobres
            </div>
            <div className="date">
                <div className="cute">Sábado</div>
                <div className="hour">
                    <h2>16</h2>
                    <span>2023</span>
                    <span>2:00 PM</span>
                </div>
                <div className="cute">Diciembre</div>
            </div>
            <ConfirmButton
                valid={ valid > 0 }
                handleShowForm={ handleShowForm }
                disabled={ loading }
            />
            <Location />
        </aside>
    )
}
