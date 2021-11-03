import React from "react";
import "./App.css";
import {Counter_1} from "../Counter_1/Counter_1";
import {Counter_localstorage} from "../Counter_localstorage/Counter_localstorage";
import {UseEffect} from "../Counter_localstorage_useEffect/useEffect";

function App() {
    return (
        <div className={"App"}>
            <div>Counter 1:</div>
            <Counter_1/>
            <hr/>
            {/*<div>Counter 2:</div>*/}
            {/*<Counter_2/>*/}
            <hr/>
            <div>Counter localstorage:</div>
            <Counter_localstorage/>
            <hr/>
            <div>Counter localstorage useEffect:</div>
            <UseEffect/>
        </div>
    )
}

export default App;
