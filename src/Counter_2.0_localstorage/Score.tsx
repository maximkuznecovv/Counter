import React from "react";
import {ErrorType} from "./Counter_2";
import s from "./Counter2.module.css";

type  ScorePropsType = {
    score: number
    start: number
    max: number
    setError: (value: ErrorType) => void
    error: ErrorType
}

export function Score2(props: ScorePropsType) {


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

