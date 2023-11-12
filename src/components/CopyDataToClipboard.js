import React from 'react';
import { useSelector } from 'react-redux';
import { formatName } from '../helpers/formatName';

export const CopyDataToClipboard = () => {
    const { families } = useSelector(state => state.family);

    const formatData = () => {
        const confirm = condition => condition ? 'Si' : 'No';

        return families.reduce((ac, { familyName, guests }) => {
            guests.forEach(guest => 
                ac.push(`${formatName(guest)}\t${confirm(guest.goes)}\n`)
            );
            return ac;
        }, []).join('');
    };

    const handleClick = ({ target }) => {
        const clip = document.querySelector('.data-clipboard');

        target.classList.add('copied');
        target.innerHTML = 'Datos copiados!';

        const data = formatData();
        clip.value = data;

        clip.select();
        clip.setSelectionRange(0, 99999999);
        document.execCommand('copy');

        clip.value = '';
        setTimeout(() => {
            target.classList.remove('copied');
            target.innerHTML = 'Copiar datos';
        }, 3000);
    };

    return (
        <>
            <button
                type="button"
                onClick={ handleClick }
            >
                Copiar datos
            </button>
            <textarea className="data-clipboard"></textarea>
        </>
    )
};
