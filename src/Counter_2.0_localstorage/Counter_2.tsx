import React, {useEffect, useState} from "react";
import {Button2} from "./Button";
import {Score2} from "./Score";
import {SetValue} from "./SetValue";
import {SetB} from "./SetB";
import s from "./Counter2.module.css";

export type ErrorType = "enter values and press 'set'" | "Incorrect value!" | ""

export function Counter_2() {
    let [score, setScore] = useState<number>(0)
    const [start, setStart] = useState<number>(0)
    const [max, setMax] = useState<number>(4)
    const [error, setError] = useState<ErrorType>("")

    function inc() {
        setScore(score + 1)
    }

    function reset() {
        setScore(start)
    }

    const setStartMax = () => {
        setScore(start)
        setError("")
    }

    useEffect(() => {
        let valueAsString = localStorage.getItem("useScore")
        if (valueAsString) {
            setScore(JSON.parse(valueAsString))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("useScore", JSON.stringify(score))
    }, [score])

    useEffect(() => {
        let valueAsString = localStorage.getItem("useStart")
        if (valueAsString) {
            setStart(JSON.parse(valueAsString))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("useStart", JSON.stringify(start))
    }, [start])

    useEffect(() => {
        let valueAsString = localStorage.getItem("useMax")
        if (valueAsString) {
            setMax(JSON.parse(valueAsString))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("useMax", JSON.stringify(max))
    }, [max])

    return <div className={s.Counter_2}>
        <div className={s.wrapper}>
            <SetValue setStart={setStart}
                      max={max}
                      setMax={setMax}
                      score={score}
                      start={start}
                      setError={setError}
                      error={error}/>
            <SetB setStartMax={setStartMax}
                  start={start}
                  max={max}
                  error={error}/>
        </div>

        <div className={s.wrapper}>
            <Score2 score={score}
                    start={start}
                    max={max}
                    setError={setError}
                    error={error}/>
            <Button2 score={score}
                     inc={inc}
                     reset={reset}
                     max={max}
                     start={start}
                     error={error}/>
        </div>
    </div>
}

