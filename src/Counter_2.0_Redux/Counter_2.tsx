import {Button} from "./Button";
import {Score} from "./Score";
import {SetValue} from "./SetValue";
import {SetB} from "./SetB";
import s from "./Counter2.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {
    CounterType,
    errorAC,
    ErrorType,
    resetAC,
    setIncAC,
    setMaxtAC,
    setStartAC,
    setStarValuetAC
} from "./counter-reduser";
import {useEffect} from "react";

export function Counter_2_Redux() {

    const dispatch = useDispatch()
    const counter = useSelector<AppRootStateType, CounterType>(state => state.counter)

    const inc = () => {
        dispatch(setIncAC())
    }

    const error = (error: ErrorType) => {
        dispatch(errorAC(error))
    }

    const reset = (start: number) => {
        dispatch(resetAC(start))
    }

    const setStart = (error: ErrorType, start: number) => {
        dispatch(setStartAC("", start))
    }

    useEffect(() => {
        let valueAsString = localStorage.getItem("useScoreRedux")
        if (valueAsString) {
            // setScore(JSON.parse(valueAsString))
            dispatch(resetAC(JSON.parse(valueAsString)))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("useScoreRedux", JSON.stringify(counter.score))
    }, [counter.score])

    useEffect(() => {
        let valueAsString = localStorage.getItem("useStartRedux")
        if (valueAsString) {
           dispatch(setStarValuetAC(JSON.parse(valueAsString)))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("useStartRedux", JSON.stringify(counter.start))
    }, [counter.start])

    useEffect(() => {
        let valueAsString = localStorage.getItem("useMaxRedux")
        if (valueAsString) {
            dispatch(setMaxtAC("", JSON.parse(valueAsString)))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("useMaxRedux", JSON.stringify(counter.max))
    }, [counter.max])

    return <div className={s.Counter_2}>
        <div className={s.wrapper}>
            <SetValue
                      max={counter.max}
                      score={counter.score}
                      start={counter.start}
                      setError={error}
                      error={counter.error}/>
            <SetB setStart={setStart}
                  start={counter.start}
                  max={counter.max}
                  error={counter.error}/>
        </div>

        <div className={s.wrapper}>
            <Score score={counter.score}
                   start={counter.start}
                   max={counter.max}
                   setError={error}
                   error={counter.error}/>
            <Button score={counter.score}
                    inc={inc}
                    reset={reset}
                    max={counter.max}
                    start={counter.start}
                    error={counter.error}/>
        </div>
    </div>
}

