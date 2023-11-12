import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { familyReducer } from '../reducers/familyReducer';
import { uiReducer } from '../reducers/uiReducer';

const reducers = combineReducers({
    ui: uiReducer,
    family: familyReducer,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);