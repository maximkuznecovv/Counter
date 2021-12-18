import React from 'react';
import {Display} from "./Display/Display";

type PropsType = {
    count: number
    maxValue: number
    settings: boolean
}

export const Counter = (props: PropsType) => {
    return (
        <div>
            <Display
                count={props.count}
                maxValue={props.maxValue}
                settings={props.settings}
            />
        </div>
    )
}