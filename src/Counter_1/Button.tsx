import React from 'react';

type  ButtonPropsType = {
    score: number
    addInc:() => void
    addReset:() => void
}

export function Button(props: ButtonPropsType) {
    return <div className='buttons'>
        <button className={'butC1'} onClick={props.addInc} disabled={props.score === 5}>+</button>
        <button className={'butC1'} onClick={props.addReset} disabled={(props.score === 0)}>reset</button>
    </div>
}

