import {ErrorType} from "../Counter_2.0_reduser";

export type CounterType = {
    score: number
    start: number
    max: number
    error: ErrorType
}

const initialState = {
    score: 0,
    start: 0,
    max: 5,
    error: "",
} as const

export type IncActionType = {
    type: "INC"
    score: number
}
export type ResetActionType = {
    type: "RESET"
    start: number
}
export type ErrorActionType = {
    type: "ERROR"
    error: ErrorType
}
export type MaxActionType = {
    type: "MAX"
    max: number
}

export type startMaxActionType = {
    type: "SET-START-MAX"
    // error: ErrorType
    start: number
}

type ActionsType = IncActionType | ResetActionType | MaxActionType | ErrorActionType | startMaxActionType

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
        case "MAX":
            return {
                ...state,
                max: action.max,
            }
        case "ERROR":
            return {
                ...state,
                error: action.error,
            }
        case "SET-START-MAX":
            return {
                ...state,
                score: action.start,
                start: action.start,
                // error: action.error,
            }
        default:
            return state
    }
}

export const setIncAC = (score: number): IncActionType => {
    return {type: "INC", score}
}
export const resetAC = (start: number): ResetActionType => {
    return {type: "RESET", start}
}
export const maxAC = (max: number): MaxActionType => {
    return {type: "MAX", max}
}
export const errorAC = (error: ErrorType): ErrorActionType => {
    return {type: "ERROR", error}
}
export const startMaxAC = ( start: number): startMaxActionType => {
    return {type: "SET-START-MAX", start}
}

