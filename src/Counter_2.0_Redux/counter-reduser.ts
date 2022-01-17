export type ErrorType = "enter values and press 'set'" | "Incorrect value!" | ""
export type CounterType = {
    score: number
    start: number
    max: number
    error: ErrorType
}

const initialState: CounterType = {
    score: 0,
    start: 0,
    max: 4,
    error: "",
}

export type IncActionType = {
    type: "INC"
}
export type ResetActionType = {
    type: "RESET"
    start: number
}
export type SetStartValueActionType = {
    type: "SET-START-VALUE"
    start: number
}
export type ErrorActionType = {
    type: "ERROR"
    error: ErrorType
}
export type startActionType = {
    type: "SET-START"
    error: ErrorType
    start: number
}
export type setMaxActionType = {
    type: "SET-MAX"
    error: ErrorType
    max: number
}

type ActionsType = IncActionType | ResetActionType | ErrorActionType | startActionType | setMaxActionType |
    SetStartValueActionType

export const counterReducer = (state: CounterType = initialState, action: ActionsType): CounterType => {
    switch (action.type) {
        case "INC":
            return {
                ...state,
                score: state.score + 1,
            }
        case "RESET":
            return {
                ...state,
                score: action.start,
            }
        case "SET-START-VALUE":
            return {
                ...state,
                start: action.start,
            }
        case "ERROR":
            return {
                ...state,
                error: action.error,
            }
        case "SET-START":
            return {
                ...state,
                score: action.start,
                start: action.start,
                error: action.error,
            }
        case "SET-MAX":
            return {
                ...state,
                max: action.max,
                error: action.error,
            }
        default:
            return state
    }
}

export const setIncAC = (): IncActionType => {
    return {type: "INC"}
}
export const resetAC = (start: number): ResetActionType => {
    return {type: "RESET", start}
}
export const setStarValuetAC = (start: number): SetStartValueActionType => {
    return {type: "SET-START-VALUE", start}
}
// export const maxAC = (): MaxActionType => {
//     return {type: "MAX", }
// }
export const errorAC = (error: ErrorType): ErrorActionType => {
    return {type: "ERROR", error}
}
export const setStartAC = (error: ErrorType, start: number): startActionType => {
    return {type: "SET-START", error, start}
}
export const setMaxtAC = (error: ErrorType, max: number): setMaxActionType => {
    return {type: "SET-MAX", error, max}
}

//
// export const setIncAC = (score: number): IncActionType => {
//     return {type: "INC", score}
// }
// export const resetAC = (start: number): ResetActionType => {
//     return {type: "RESET", start}
// }
// export const maxAC = (max: number): MaxActionType => {
//     return {type: "MAX", max}
// }
// export const errorAC = (error: ErrorType): ErrorActionType => {
//     return {type: "ERROR", error}
// }
// export const startMaxAC = (error: ErrorType, start: number): startMaxActionType => {
//     return {type: "SET-START-MAX", error, start}
// }
//
