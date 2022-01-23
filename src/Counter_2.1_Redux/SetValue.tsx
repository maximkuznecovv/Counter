import React, {ChangeEvent, useCallback, useEffect} from "react";
import s from "./Counter2.module.css";
import {useDispatch} from "react-redux";
import {ErrorType, setMaxAC, setStartAC} from "./counter-reduser";

export type SetValuePropsType = {
    max: number
    start: number
    setError: (value: ErrorType) => void
    error: ErrorType
}

export const SetValue: React.FC<SetValuePropsType> = React.memo((props) => {
    const{
        max,
        start,
        setError,
        error,
    } = props

    const dispatch = useDispatch()

    useEffect(() => {
        if (start < 0) {
            setError("Incorrect value!")
        } else if (start >= max) {
            setError("Incorrect value!")
        }
    }, [start, max])

    const setMaxValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        // props.setError("enter values and press 'set'")
        // props.setMax(Number(e.currentTarget.value))
        dispatch(setMaxAC("enter values and press 'set'", Number(e.currentTarget.value)))
    },[dispatch])

    const setMinValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        // props.setError("enter values and press 'set'")
        // // return props.setStart(Number(e.currentTarget.value))
        // return props.setStart(e.currentTarget.valueAsNumber)
        dispatch(setStartAC("enter values and press 'set'", Number(e.currentTarget.value)))
    },[dispatch])

    const errorInput = `${s.input} ${error === "Incorrect value!" ? s.max : ""}`


    return <div className={s.settingScore}>
        <div className={s.mxValue}>
            <div>
                <span>max value:</span>
                <input
                    value={max}
                    className={errorInput}
                    onChange={setMaxValue}
                    type="number"
                    // min="0"
                />
            </div>
            <div>
                <span>start value:</span>
                <input
                    value={start}
                    className={errorInput}
                    onChange={setMinValue}
                    type="number"
                    // min="0"
                />
            </div>
        </div>
    </div>
})
