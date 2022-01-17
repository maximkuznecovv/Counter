import React, {useEffect, useReducer, useState} from "react";
import {Button2} from "./Button";
import {Score2} from "./Score";
import {SetValue} from "./SetValue";
import {SetB} from "./SetB";
import s from "./Counter2.module.css";
import {counterReducer, errorAC, maxAC, resetAC, setIncAC, startMaxAC} from "./state/counter-reduser";

export type ErrorType = "enter values and press 'set'" | "Incorrect value!" | ""

export function Counter_2_reduser() {
    // let [score, setScore] = useState<number>(0)
    // const [start, setStart] = useState<number>(0)
    // const [max, setMax] = useState<number>(4)
    // const [error, setError] = useState<ErrorType>("")

    let [counter, dispatchToCounter] = useReducer(counterReducer, {
        score: 0,
        start: 0,
        max: 5,
        error: "",
    })

    const inc = (score: number) => {
        dispatchToCounter(setIncAC(score))
    }

    const reset = (start: number) => {
        dispatchToCounter(resetAC(start))
    }

    const max = (start: number) => {
        dispatchToCounter(maxAC(start))
    }

    const error = (error: ErrorType) => {
        dispatchToCounter(errorAC(error))
    }

    const setStartMax = ( start: number) => {
        dispatchToCounter(startMaxAC( start))
    }

    // useEffect(() => {
    //     let valueAsString = localStorage.getItem("useScoreReduser")
    //     if (valueAsString) {
    //         dispatchToCounter(JSON.parse(valueAsString))
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem("useScoreReduser", JSON.stringify(counter.score))
    // }, [counter.score])
    //
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem("useStartReduser")
    //     if (valueAsString) {
    //         dispatchToCounter(JSON.parse(valueAsString))
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem("useStartReduser", JSON.stringify(counter.start))
    // }, [counter.start])
    //
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem("useMaxReduser")
    //     if (valueAsString) {
    //         dispatchToCounter(JSON.parse(valueAsString))
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem("useMaxReduser", JSON.stringify(counter.max))
    // }, [counter.max])

    // useEffect(() => {
    //     let valueAsString = localStorage.getItem("errorReduser")
    //     if (valueAsString) {
    //         dispatchToCounter(JSON.parse(valueAsString))
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem("errorReduser", JSON.stringify(counter.error))
    // }, [counter.error])

    return <div className={s.Counter_2}>
        <div className={s.wrapper}>
            <SetValue setStart={setStartMax}
                      max={counter.max}
                      setMax={max}
                      score={counter.score}
                      start={counter.start}
                      setError={error}
                      error={counter.error}/>
            <SetB setStartMax={setStartMax}
                  start={counter.start}
                  max={counter.max}
                  error={counter.error}
                  setError={error}/>
        </div>

        <div className={s.wrapper}>
            <Score2 score={counter.score}
                    start={counter.start}
                    max={counter.max}
                    setError={error}
                    error={counter.error}/>
            <Button2 score={counter.score}
                     inc={inc}
                     reset={reset}
                     max={counter.max}
                     start={counter.start}
                     error={counter.error}/>
        </div>
    </div>
}

