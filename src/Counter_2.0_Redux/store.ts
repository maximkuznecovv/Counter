import {combineReducers, createStore} from 'redux';
import {counterReducer} from "./counter-reduser";
import {settingsCounterReducer} from "../Count Else/Counter_Vlad_REDUX/redux/settings-counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    settingsCounter: settingsCounterReducer
})
export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
