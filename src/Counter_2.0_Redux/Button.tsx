import React from "react";
import {ErrorType} from "./counter-reduser";
import s from "./Counter2.module.css";


type  ButtonPropsType = {
    score: number
    inc: () => void
    reset: (start: number) => void
    start: number
    max: number
    error: ErrorType
}

export function Button(props: ButtonPropsType) {

    const error1 = props.error === "enter values and press 'set'"
    const error2 = props.error === "Incorrect value!"

    const reset = () => {
        props.reset(props.start)
    }

    return <div className={s.buttons}>
        <button className={s.butC1}
                onClick={props.inc}
                disabled={error1 || error2 || props.score === props.max}>+
        </button>
        <button className={s.butC1}
                onClick={reset}
                disabled={error1 || error2 || props.score === props.start}>reset
        </button>
    </div>
}
