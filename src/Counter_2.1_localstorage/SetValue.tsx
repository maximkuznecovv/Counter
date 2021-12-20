import React, {ChangeEvent} from "react";
import {ErrorType} from "./Counter_2_1";
import s from "./Counter2_1.module.css";

export type SetValuePropsType = {
    setStart: (start: number) => void
    max: number
    setMax: (max: number) => void
    score: number
    start: number
    setError: (value: ErrorType) => void
    error: ErrorType
}

export const SetValue = (props: SetValuePropsType) => {

    if (props.start < 0) {
        props.setError("Incorrect value!")
    } else if (props.start >= props.max) {
        props.setError("Incorrect value!")
    }

    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setError("enter values and press 'set'")
        return props.setMax(Number(e.currentTarget.value))
    }

    const setMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setError("enter values and press 'set'")
        return props.setStart(Number(e.currentTarget.value))
    }

    const errorInput = `${s.input} ${props.error === "Incorrect value!" ? s.max : ""}`

    return <div className={s.settingScore}>
        <div className={s.mxValue}>
            <div>
                <span>max value:</span>
                <input
                    value={props.max}
                    className={errorInput}
                    onChange={setMaxValue}
                    type="number"
                    // min="0"
                />
            </div>
            <div>
                <span>start value:</span>
                <input
                    value={props.start}
                    className={errorInput}
                    onChange={setMinValue}
                    type="number"
                    // min="0"
                />
            </div>
        </div>
    </div>
}

