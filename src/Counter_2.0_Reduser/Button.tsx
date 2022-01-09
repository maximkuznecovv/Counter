import React from "react";
import s from './Counter2.module.css';
import {ErrorType} from "./Counter_2";


type  ButtonPropsType = {
    score: number
    inc: () => void
    reset: () => void
    start: number
    max: number
    error: ErrorType

}

export function Button2(props: ButtonPropsType) {


    const error1 = props.error === "enter values and press 'set'"
    const error2 = props.error === "Incorrect value!"

    return <div className={s.buttons}>
        <button className={s.butC1}
                onClick={props.inc}
                disabled={error1 || error2 || props.score === props.max}>+
        </button>
        <button className={s.butC1}
                onClick={props.reset}
                disabled={error1 || error2 || props.score === props.start}>reset
        </button>
    </div>
}


