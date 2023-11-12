import React from 'react';
import { Provider } from 'react-redux';

import { BabyShowerApp } from './components/BabyShowerApp';
import { store } from './store/store';

export const Principal = () => {
    return (
        <Provider store={ store }>
            <BabyShowerApp />
        </Provider>
    )
}
