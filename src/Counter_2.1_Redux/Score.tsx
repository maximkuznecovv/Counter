import React from "react";
import s from "./Counter2.module.css";
import {ErrorType} from "./counter-reduser";

type  ScorePropsType = {
    score: number
    max: number
    error: ErrorType
}

export const Score: React.FC<ScorePropsType> = React.memo((props) => {
    const {
        score,
        max,
        error,
    } = props

    const errorStyle = error === "Incorrect value!" ? s.error : ""
    const colorCount = score >= max ? s.error : ""

    return <div className={s.score}>
        {
            error
                ? <p className={errorStyle}>{error}</p>
                : <h1 className={colorCount}>{score}</h1>
        }
    </div>
})

