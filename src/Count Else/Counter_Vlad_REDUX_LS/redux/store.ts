import {combineReducers, createStore} from 'redux';
import {counterReducerVlad} from './counter-reducer';
import {loadState, saveState} from '../utils/localStorage';

const rootReducer = combineReducers({
    settingsCounter: counterReducerVlad
})

export type AppStateType = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer, loadState())


store.subscribe(() => {
    saveState({
        settingsCounter: store.getState().settingsCounter
    });
});
