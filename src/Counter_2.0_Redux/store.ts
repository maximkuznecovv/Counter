import {combineReducers, createStore} from 'redux';
import {counterReducer} from "./counter-reduser";
import {counterReducer_2_1} from "../Counter_2.1_Redux/counter-reduser";
import {counterReducerVlad} from "../Count Else/Counter_Vlad_REDUX_LS/redux/counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    counter_2_1: counterReducer_2_1,
    settingsCounter: counterReducerVlad //Влад
})
export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
