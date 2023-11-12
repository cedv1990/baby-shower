export const filterFamiliesList = (familiesList, nameFilter, applyGoesFilter) => {
    const filterName = text => new RegExp(`${nameFilter}`, 'ig').test(text);

    const filterGuestName = ({ firstName, middleName, lastName, secondLastName, nickname }) =>
        filterName(`${firstName||''} ${middleName||''} ${lastName||''} ${secondLastName||''} ${nickname||''}`);

    const filterFamily = ({ familyName, guests }) => 
        ((applyGoesFilter && guests.filter(g => g.goes).length > 0) || !applyGoesFilter)
        && (
            !nameFilter
            || (nameFilter && (filterName(familyName) || guests.filter(filterGuestName).length > 0))
        );

    const formatFamily = f => ({
        ...f,
        guests: (nameFilter ? f.guests.filter(filterGuestName) : f.guests)
    });

    const cleanFamilyMap = f => f.guests.length === 0 ? familiesList.find(h => h.id === f.id) : f;

    const sortFamilyMap = (af, bf) => af.familyName.localeCompare(bf.familyName);

    const getFamiliesFiltered = () => familiesList
                                        .filter(filterFamily)
                                        .map(formatFamily)
                                        .map(cleanFamilyMap)
                                        .sort(sortFamilyMap);

    return getFamiliesFiltered();
};
