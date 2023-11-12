import { db } from '../database/firebase-config';

export const loadFamilyData = async familyId => {
    const familySnapshot = (await db.doc(`families/${familyId}`).get()).data();
    if (familySnapshot) {
        const guestsSnapshot = await db.collection(`families/${familyId}/guests`).get();

        const guests = [];

        guestsSnapshot.forEach( snapHijo => guests.push({
            id: snapHijo.id,
            ...snapHijo.data()
        }));

        return { ...familySnapshot, id: familyId, guests };
    }
    return {};
};

export const loadFamilies = async () => {
    // if (process.env.NODE_ENV === 'development') {
    //     return JSON.parse(localStorage.getItem('guests'));
    // }

    const familiesData = [];
    const familyRef = (await db.collection('families').get()).docs;

    for (let family of familyRef) {
        const { family_name: familyName } = family.data();
        const guests = [];

        const guestsRef = (await db.collection(`families/${family.id}/guests`).get()).docs;

        for (let guest of guestsRef) {
            const { first_name: firstName, middle_name: middleName, last_name: lastName, second_last_name: secondLastName, nickname, goes } = guest.data();
            guests.push({
                firstName,
                middleName,
                lastName,
                secondLastName,
                nickname,
                goes,
            });
        }

        familiesData.push({
            id: family.id,
            familyName,
            guests,
            total: guests.length,
            confirmed: guests.filter(g => g.goes).length
        });
    }

    return familiesData;
};
