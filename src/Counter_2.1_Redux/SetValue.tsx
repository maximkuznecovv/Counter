import React, {ChangeEvent, useEffect} from "react";
import s from "./Counter2.module.css";
import {useDispatch} from "react-redux";
import {ErrorType, setMaxAC, setStartAC} from "./counter-reduser";

export type SetValuePropsType = {
    max: number
    score: number
    start: number
    setError: (value: ErrorType) => void
    error: ErrorType
}

export const SetValue = (props: SetValuePropsType) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (props.start < 0) {
            props.setError("Incorrect value!")
        } else if (props.start >= props.max) {
            props.setError("Incorrect value!")
        }
    }, [props.start, props.max])

    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        // props.setError("enter values and press 'set'")
        // props.setMax(Number(e.currentTarget.value))
        dispatch(setMaxAC("enter values and press 'set'", Number(e.currentTarget.value)))
    }

    const setMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        // props.setError("enter values and press 'set'")
        // // return props.setStart(Number(e.currentTarget.value))
        // return props.setStart(e.currentTarget.valueAsNumber)
        dispatch(setStartAC("enter values and press 'set'", Number(e.currentTarget.value)))
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
