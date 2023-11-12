export const formatName = ({ firstName, middleName, lastName, secondLastName, nickname }) => {
    return `${firstName||''} ${middleName||''} ${lastName||''} ${secondLastName||''} ${ nickname === firstName || nickname === middleName ? '' : `(${nickname})` }`;
};