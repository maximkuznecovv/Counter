import {Button} from "./Button";
import {Score} from "./Score";
import {SetValue} from "./SetValue";
import {SetB} from "./SetB";
import s from "./Counter2.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {
    Counter2_1Type,
    errorAC,
    ErrorType, onOffAC,
    resetAC,
    setIncAC,
    setMaxAC,
    setStartAC,
    setStarValuetAC
} from "./counter-reduser";
import {useEffect} from "react";

export function Counter_2_1_redux() {

    const dispatch = useDispatch()
    const counter_2_1 = useSelector<AppRootStateType, Counter2_1Type>(state => state.counter_2_1)

    const onOff = (isOnOff: boolean) => {

        localStorage.setItem("isOnOff_2_1", JSON.stringify(true))
        dispatch(onOffAC(isOnOff))
    }

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
        localStorage.setItem("isOnOff_2_1", JSON.stringify(false))
        dispatch(setStartAC("", start))
        dispatch(onOffAC(false))
    }


    useEffect(() => {
        let isOnOff = localStorage.getItem("isOnOff_2_1")

        if (isOnOff === 'true') {
            dispatch(onOffAC((true)))
        } else {
            dispatch(onOffAC((false)))

        }
    }, [counter_2_1.isOnOff])

    // useEffect(() => {
    //
    // }, [counter_2_1.isOnOff])

    useEffect(() => {
        let valueAsString = localStorage.getItem("useScoreRedux_2_1")
        if (valueAsString) {
            dispatch(resetAC(JSON.parse(valueAsString)))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("useScoreRedux_2_1", JSON.stringify(counter_2_1.score))
    }, [counter_2_1.score])

    useEffect(() => {
        let valueAsString = localStorage.getItem("useStartRedux_2_1")
        if (valueAsString) {
            dispatch(setStarValuetAC(JSON.parse(valueAsString)))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("useStartRedux_2_1", JSON.stringify(counter_2_1.start))
    }, [counter_2_1.start])

    useEffect(() => {
        let valueAsString = localStorage.getItem("useMaxRedux_2_1")
        if (valueAsString) {
            dispatch(setMaxAC("", JSON.parse(valueAsString)))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("useMaxRedux_2_1", JSON.stringify(counter_2_1.max))
    }, [counter_2_1.max])

    return <div className={s.Counter_2}>
        {counter_2_1.isOnOff
            ? <div className={s.wrapper}>
                <SetValue
                    max={counter_2_1.max}
                    score={counter_2_1.score}
                    start={counter_2_1.start}
                    setError={error}
                    error={counter_2_1.error}/>
                <SetB
                    setStart={setStart}
                    start={counter_2_1.start}
                    max={counter_2_1.max}
                    error={counter_2_1.error}/>
            </div>
            : <div className={s.wrapper}>
                <Score
                    score={counter_2_1.score}
                    start={counter_2_1.start}
                    max={counter_2_1.max}
                    setError={error}
                    error={counter_2_1.error}/>
                <Button
                    score={counter_2_1.score}
                    inc={inc}
                    reset={reset}
                    max={counter_2_1.max}
                    start={counter_2_1.start}
                    error={counter_2_1.error}
                    onOff={onOff}/>
            </div>
        }
    </div>
}

