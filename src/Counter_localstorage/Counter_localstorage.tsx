import React, {useState} from "react";

export function Counter_localstorage() {

    let [value, setValue] = useState<number>(0)

    const incHandler = () => {
        setValue(value + 1)
    }

    const setLocalStorageHandler = () => {
        localStorage.setItem("counterValue", JSON.stringify(value))
        localStorage.setItem("counterValue + 1", JSON.stringify(value + 1))
    }

    const setSessionStorageHandler = () => {
        // sessionStorage.setItem("Value", JSON.stringify(value))
        sessionStorage.setItem("Value", value.toString())
    }

    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }

    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }

    const removeItemFromLocalStorageHandler = () => {
        localStorage.removeItem("counterValue + 1")
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setLocalStorageHandler}>setLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
            <button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorage</button>

            <div>
                <button onClick={setSessionStorageHandler}>setSessionStorage</button>
            </div>
        </div>
    );
}
