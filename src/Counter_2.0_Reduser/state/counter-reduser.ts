import {ErrorType} from "../Counter_2";

export type CounterType = {
    score: number
    start: number
    max: number
    error: ErrorType
}

const initialState = {
    score: 0,
    start: 0,
    max: 4,
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

export type startMaxActionType = {
    type: "SET-START-MAX"
    error: ErrorType
    start: number
}

type ActionsType = IncActionType | ResetActionType | startMaxActionType

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
                start: action.start,
            }
        case "SET-START-MAX":
            return {
                ...state,
                start: action.start,
                error: action.error,
            }
        default:
            throw new Error("I don't understand this type")
    }
}

