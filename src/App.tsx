import {useState} from "react";
import './App.css'
import {Button} from "./Button";
import {Score} from "./Score";

const App = () => {
    const [score, setScore] = useState(0)

    const inc = () => {
        setScore(score + 1)
    }

    const reset = () => {
        setScore(0)
    }

    return <div className={"App"}>
        <div className={"wrapper"}>
            <Score score={score}/>
            <Button score={score}
                    inc={inc}
                    reset={reset}/>
        </div>
    </div>
}

export default App