import React, {useEffect, useState} from "react";

export function UseEffect() {

    let [value, setValue] = useState<number>(0)

    const incHandler = () => {
        setValue(value + 1)
    }

    useEffect(()=>{
        let valueAsString = localStorage.getItem("useValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("useValue", JSON.stringify(value))
    }, [value])

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
}
