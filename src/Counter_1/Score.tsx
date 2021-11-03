import React from 'react';

type  ScorePropsType = {
    score: number

}

export function Score(props: ScorePropsType) {
    return <div className={props.score === 5 ? 'scoreRed' : 'score'}>{props.score}</div>
}
