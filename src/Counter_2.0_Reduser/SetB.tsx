import React from "react";
import s from "./Counter2.module.css";
import {ErrorType} from "./Counter_2.0_reduser";

export type SetBPropsType = {
    setStartMax: ( start: number) => void
    start: number
    max: number
    error: ErrorType
    setError: (value: ErrorType) => void
}

export const SetB = (props: SetBPropsType) => {

    const disabledButton = props.error === "Incorrect value!"

    const startMax = () => {
        props.setError("")
        props.setStartMax( props.start);
    }

    return <div className={s.buttons}>
        <button className={s.setBut} onClick={startMax} disabled={disabledButton}>set</button>
    </div>
}
