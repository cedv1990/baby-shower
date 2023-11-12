import React from 'react';
import { Provider } from 'react-redux';

import { WeddingApp } from './components/WeddingApp';
import { store } from './store/store';

export const Principal = () => {
    return (
        <Provider store={ store }>
            <WeddingApp />
        </Provider>
    )
}
