import {counterReducer, CounterType, startMaxActionType} from "./counter-reduser";

test("inc should be increment", () => {

    const startState: CounterType = {
        score: 0,
        start: 0,
        max: 4,
        error: "",
    }

    let newScoreValue = 1

    const endState = counterReducer(startState, {type: "INC", score: newScoreValue})

    expect(endState.score).toBe(newScoreValue);
});

test("reset should be reset to start value", () => {

    const startState: CounterType = {
        score: 0,
        start: 0,
        max: 4,
        error: "",
    }

    let newStart = 3

    const action = {
        type: "RESET" as const,
        start: newStart
    };
    const endState = counterReducer(startState, action)

    expect(endState.start).toBe(newStart);
});

test("start/max value should be change", () => {

    const startState: CounterType = {
        score: 0,
        start: 0,
        max: 4,
        error: "",
    }

    const action: startMaxActionType = {
        type: "SET-START-MAX",
        error: "Incorrect value!",
        start: 0
    };
    const endState = counterReducer(startState, action)

    expect(endState.error).toBe("Incorrect value!");
    expect(endState.start).toBe(0);
});
