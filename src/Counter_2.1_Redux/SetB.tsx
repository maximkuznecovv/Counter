import React, {useCallback} from "react";
import s from "./Counter2.module.css";
import {ErrorType} from "./counter-reduser";

export type SetBPropsType = {
    setStart: (error: ErrorType, start: number) => void
    start: number
    error: ErrorType
}

export const SetB: React.FC<SetBPropsType> = React.memo((props) => {
    const {
        setStart,
        start,
        error,
    } = props

    const disabledButton = error === "Incorrect value!"

    const onSetStart = useCallback(() => {
        setStart(error, start)
    }, [])

    return <div className={s.buttons}>
        <button className={s.setBut} onClick={onSetStart} disabled={disabledButton}>set</button>
    </div>
})
