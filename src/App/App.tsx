import React from "react";
import {Counter_localstorage} from "../Counter_localstorage/Counter_localstorage";
import {UseEffect} from "../Counter_localstorage_useEffect/useEffect";
import {Counter_1} from "../Counter_1/Counter_1";
import "./App.css"

function App() {

    return (
        <div className='app'>
            <div>Counter 1:</div>
            <Counter_1/>
            <hr/>
            <hr/>
            <div>Counter localstorage:</div>
            <Counter_localstorage/>
            <hr/>
            <hr/>
            <div>Counter localstorage useEffect:</div>
            <UseEffect/>
        </div>
    )
}

export default App;
