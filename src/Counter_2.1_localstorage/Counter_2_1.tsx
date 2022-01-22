import React, {useEffect, useState} from "react";
import {Button2} from "./Button";
import {Score2} from "./Score";
import {SetValue} from "./SetValue";
import {SetB} from "./SetB";
import s from "./Counter2_1.module.css";

export type ErrorType = "enter values and press 'set'" | "Incorrect value!" | ""

export function Counter_2_1() {
    let [score, setScore] = useState<number>(0)
    const [start, setStart] = useState<number>(0)
    const [max, setMax] = useState<number>(4)
    const [error, setError] = useState<ErrorType>("")
    const [isOnOff, setIsOnOff] = useState<boolean>(false)

    const onOff = () => {
        setIsOnOff(true)
    }

    const inc = () => {
        setScore(score + 1)
    }

    const reset = () => {
        setScore(start)
    }

    const setStartMax = () => {
        setScore(start)
        setError("")
        setIsOnOff(false)
    }

    useEffect(() => {
        let isOnOff = localStorage.getItem("isOnOff")
        if (isOnOff) {
            setIsOnOff(JSON.parse(isOnOff))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("isOnOff", JSON.stringify(isOnOff))
    }, [isOnOff])

    useEffect(() => {
        let settingScore = localStorage.getItem("settingScore")
        if (settingScore) {
            setScore(JSON.parse(settingScore))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("settingScore", JSON.stringify(score))
    }, [score])


    useEffect(() => {
        let settingStart = localStorage.getItem("settingStart")
        if (settingStart) {
            setStart(JSON.parse(settingStart))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("settingStart", JSON.stringify(start))
    }, [start])


    useEffect(() => {
        let settingMax = localStorage.getItem("settingMax")
        if (settingMax) {
            setMax(JSON.parse(settingMax))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("settingMax", JSON.stringify(max))
    }, [max])

    return <div className={s.Counter_2}>
        {isOnOff
            ? <div className={s.wrapper}>
                <SetValue
                    setStart={setStart}
                    max={max}
                    setMax={setMax}
                    score={score}
                    start={start}
                    setError={setError}
                    error={error}/>
                <SetB
                    setStartMax={setStartMax}
                    start={start}
                    max={max}
                    error={error}/>
            </div>
            : <div className={s.wrapper}>
                <Score2
                    score={score}
                    start={start}
                    max={max}
                    setError={setError}
                    error={error}/>
                <Button2
                    score={score}
                    inc={inc}
                    reset={reset}
                    max={max}
                    start={start}
                    error={error}
                    onOff={onOff}/>
            </div>
        }
    </div>
}
