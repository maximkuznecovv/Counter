import React from "react";
import s from "./Counter2.module.css";
import {ErrorType} from "./counter-reduser";

type  ScorePropsType = {
    score: number
    start: number
    max: number
    setError: (value: ErrorType) => void
    error: ErrorType
}

export function Score(props: ScorePropsType) {

    const errorStyle = props.error === "Incorrect value!" ? s.error : ""
    const colorCount = props.score >= props.max ? s.error : ""

    return <div className={s.score}>
        {
            props.error
                ? <p className={errorStyle}>{props.error}</p>
                : <h1 className={colorCount}>{props.score}</h1>
        }
    </div>
}

