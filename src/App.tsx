import React, {useState} from 'react';
import './App.css';
import {Button} from './Button';
import {Score} from "./Score";

function App() {
    let [score, setScore] = useState<number>(0)

    function inc() {
        setScore(score + 1)
    }

    function reset() {
        setScore(0)
    }

    return (
        <div className="App">
            <div className='wrapper'>
                <Score score={score}/>
                <Button score={score}
                        addInc={inc}
                        addReset={reset}/>
            </div>
        </div>
    );
}

export default App;