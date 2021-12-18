import React from "react";
//import {ErrorType, SettingsCounterType} from "../App";
import s from "./Counter.module.css";
import {Button} from "./Button";
import {ErrorType, SettingsCounterType} from "./Counter_Vlad";

export type CounterTableProps = {
    count: number
    settingsCounter: SettingsCounterType
    error: ErrorType
    slowResetCount: (count: number) => void
}
export type CounterButtonsProps = {
    count: number
    error: ErrorType
    setCountIncValue: () => void
    resetCountValue: () => void
    settingsCounter: SettingsCounterType
    slowResetCount: (count: number) => void
}

export type CounterPropsType = {
    count: number
    setCountIncValue: () => void
    resetCountValue: () => void
    slowResetCount: (count: number) => void
    settingsCounter: SettingsCounterType
    error: ErrorType
}

export const Counter: React.FC<CounterPropsType> = ({settingsCounter, ...props}) => {
    return (
        <div className={s.CounterWrapper}>
            <CounterTable
                count={props.count}
                settingsCounter={settingsCounter}
                error={props.error}
                slowResetCount={props.slowResetCount}
            />
            <CounterBtn
                count={props.count}
                setCountIncValue={props.setCountIncValue}
                resetCountValue={props.resetCountValue}
                settingsCounter={settingsCounter}
                slowResetCount={props.slowResetCount}
                error={props.error}
            />
        </div>
    )
}

const CounterTable: React.FC<CounterTableProps> = ({settingsCounter, ...props}) => {

    const errorStyle = props.error === "Incorrect value!" ? s.error : ""
    const colorCount = props.count >= settingsCounter.maxValueCount.valueCount ? s.error : ""

    return (
        <div className={s.counter}>
            {props.error
                ? <p className={errorStyle}>{props.error}</p>
                : <h1 className={colorCount}>{props.count}</h1>}
        </div>
    )
}

const CounterBtn: React.FC<CounterButtonsProps> = ({settingsCounter, ...props}) => {

    const countInc = () => {
        props.setCountIncValue()
    }
    const countReset = () => {
        props.resetCountValue()
    }
    const slowlyReset = () => {
        props.slowResetCount(props.count)
    }

    const error1 = props.error === "enter values and press 'set'"
    const error2 = props.error === "Incorrect value!"

    return (
        <div className={s.buttons}>
            <Button
                title={"inc"}
                disabled={error2 || error1 || props.count >= settingsCounter.maxValueCount.valueCount}
                onClickHandler={countInc}
            />
            <Button
                title={"reset"}
                disabled={error2 || error1 || props.count <= settingsCounter.minValueCount.valueCount}
                onClickHandler={countReset}
            />
            <Button
                title={"slowly reset"}
                disabled={error2 || error1 || props.count <= settingsCounter.minValueCount.valueCount}
                onClickHandler={slowlyReset}
            />
        </div>
    )
}
