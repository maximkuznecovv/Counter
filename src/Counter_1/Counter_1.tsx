import React, {useState} from "react";
import {Button} from "./Button";
import {Score} from "./Score";

export function Counter_1() {

    let [score, setScore] = useState<number>(0)

    function inc() {
        setScore(score + 1)
    }

    function reset() {
        setScore(0)
    }

    return (
        <div className="Counter_1">
            <div className='wrapper'>
                <Score score={score}/>
                <Button score={score}
                        addInc={inc}
                        addReset={reset}/>
            </div>
        </div>
    );
}
