import React, {useCallback} from "react";
import {ErrorType} from "./counter-reduser";
import s from "./Counter2.module.css";


type  ButtonPropsType = {
    score: number
    inc: () => void
    reset: (start: number) => void
    start: number
    max: number
    error: ErrorType
    onOff: (isOnOff: boolean) => void
}

export const Button: React.FC<ButtonPropsType> = React.memo((props) => {
    const {
        score,
        inc,
        reset,
        start,
        max,
        error,
        onOff,
    } = props

    const error1 = error === "enter values and press 'set'"
    const error2 = error === "Incorrect value!"

    const onReset = useCallback(() => {
        reset(start)
    }, [])
    const setOnOff = useCallback(() => {
        onOff(true)
    }, [])

    return <div className={s.buttons}>
        <button className={s.butC1}
                onClick={inc}
                disabled={error1 || error2 || score === max}>+
        </button>
        <button className={s.butC1}
                onClick={onReset}
                disabled={error1 || error2 || score === start}>reset
        </button>

        <button className={s.butC1} onClick={setOnOff}>set</button>
    </div>
})
