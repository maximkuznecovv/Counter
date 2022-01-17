import React from "react";
import {Counter_localstorage} from "../Counter_localstorage/Counter_localstorage";
import {UseEffect} from "../Counter_localstorage_useEffect/useEffect";
import {Counter_1} from "../Counter_1/Counter_1";
import "./App.css"
import {Counter_2} from "../Counter_2.0_localstorage/Counter_2";
import {Counter_Vlad} from "../Count Else/Counter_Vlad/Counter_Vlad";
import App_someone from "../Count Else/Counter_someone/App";
import {Counter_2_1} from "../Counter_2.1_localstorage/Counter_2_1";
import {Counter_2_reduser} from "../Counter_2.0_Reduser/Counter_2.0_reduser";
import {Counter_2_Redux} from "../Counter_2.0_Redux/Counter_2";
import {Counter_Vlad_Redux} from "../Count Else/Counter_Vlad_REDUX/App";

function App() {

    return (
        <div className='app'>
         {/*   <div>Counter 1:</div>
            <Counter_1/>
            <hr/>
            <hr/>
            <div>COUNTER 2.0 localstorage:</div>
            <Counter_2/>
            <hr/>
            <hr/>
            <div>COUNTER 2.0 Reduser:</div>
            <Counter_2_reduser/>
            <hr/>*/}
            <hr/>
            <div>COUNTER 2.0 Redux:</div>
            <Counter_2_Redux/>
            <hr/>
          {/*  <hr/>
            <div>COUNTER 2.1 localstorage:</div>
            <Counter_2_1/>
            <hr/>
            <hr/>
            <div>Counter Vlad:</div>
            <Counter_Vlad/>
            <hr/>
            <hr/>
            <div>Counter Vlad Redux:</div>
            <Counter_Vlad_Redux/>
            <hr/>
            <hr/>
            <div>Counter Someone:</div>
            <App_someone/>
            <hr/>
            <hr/>
            <div>Counter localstorage:</div>
            <Counter_localstorage/>
            <hr/>
            <hr/>
            <div>Counter localstorage useEffect:</div>
            <UseEffect/>*/}
        </div>
    )
}

export default App;
