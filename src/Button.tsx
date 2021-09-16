import React from "react";

type buttonPropsType = {
    score: number
    inc: () => void
    reset: () => void
}

export const Button = (props: buttonPropsType) => {
    return <div className={'buttons'}>
        <button onClick={props.inc} disabled={props.score === 5}>inc</button>
        <button onClick={props.reset} disabled={props.score === 0}>reset</button>
    </div>
}