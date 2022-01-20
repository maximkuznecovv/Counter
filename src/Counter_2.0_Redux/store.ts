import {combineReducers, createStore} from 'redux';
import {counterReducer} from "./counter-reduser";
import {settingsCounterReducer} from "../Count Else/Counter_Vlad_REDUX/redux/settings-counter-reducer";
import {counterReducer_2_1} from "../Counter_2.1_Redux/counter-reduser";

const rootReducer = combineReducers({
    counter: counterReducer,
    counter_2_1: counterReducer_2_1,
    settingsCounter: settingsCounterReducer //Влад
})
export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
