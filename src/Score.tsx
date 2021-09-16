import React from "react";

type scorePropsType = {
    score: number
}

export const Score = (props: scorePropsType) => {
    return <div className={props.score === 5 ? "scoreRed" : "score"}>{props.score}</div>
}