import React from "react";
import s from './Counter2_1.module.css';
import {ErrorType} from "./Counter_2_1";

export type SetBPropsType = {
    setStartMax: () => void
    start: number
    max: number
    error: ErrorType
}

export const SetB = (props: SetBPropsType) => {

    const disabledButton = props.error === 'Incorrect value!'

    return <div className={s.buttons}>
        <button className={s.setBut} onClick={props.setStartMax} disabled={disabledButton}>set</button>
    </div>
}
