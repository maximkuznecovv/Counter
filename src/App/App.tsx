import React from "react";
import "./App.css";
import {Counter_1} from "../Counter_1/Counter_1";
import {Counter_localstorage} from "../Counter_localstorage/Counter_localstorage";

function App() {
    return (
        <div className={"App"}>
            {/*<div>Counter 1:</div>*/}
            <Counter_1/>
            <hr/>
            {/*<div>Counter 2:</div>*/}
            {/*<Counter_2/>*/}
            {/*<div>Counter localstorage:</div>*/}
            <Counter_localstorage/>
        </div>
    )
}

export default App;
