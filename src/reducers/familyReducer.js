import { types } from "../types/types";

const initialState = {
    family: {},
    families: []
};

export const familyReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.familyLoad:
            return {
                ...state,
                family: {...action.payload}
            };
        case types.guestFieldUpdate:
            let guests = [...state.family.guests];
            const { guestId, field, value } = action.payload;
            guests = guests.map(g => {
                if (g.id === guestId) {
                    g[field] = value;
                }
                return g;
            });
            return {
                ...state,
                family: {
                    ...state.family,
                    guests: [...guests]
                }
            };

        case types.familiesLoad:
            return {
                ...state,
                families: action.payload
            };
        default:
            return state;
    }
};