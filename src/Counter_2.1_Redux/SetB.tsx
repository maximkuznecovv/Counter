import React from "react";
import s from './Counter2.module.css';
import {ErrorType} from "./counter-reduser";

export type SetBPropsType = {
    setStart: (error: ErrorType, start: number) => void
    start: number
    max: number
    error: ErrorType
}

export const SetB = (props: SetBPropsType) => {

    const disabledButton = props.error === 'Incorrect value!'

    const setStart = () => {
        props.setStart(props.error, props.start);
    }

    return <div className={s.buttons}>
        <button className={s.setBut} onClick={setStart} disabled={disabledButton}>set</button>
    </div>
}
