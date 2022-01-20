export type ErrorType = "enter values and press 'set'" | "Incorrect value!" | ""

export type Counter2_1Type = {
    score: number
    start: number
    max: number
    error: ErrorType
    isOnOff: boolean
}

const initialState: Counter2_1Type = {
    score: 0,
    start: 0,
    max: 4,
    error: "",
    isOnOff: false
}

export type IsOnOffActionType = {
    type: "ONOFF-2-1"
    isOnOff: boolean
}
export type IncActionType = {
    type: "INC-2-1"
}
export type ResetActionType = {
    type: "RESET-2-1"
    start: number
}
export type SetStartValueActionType = {
    type: "SET-START-VALUE-2-1"
    start: number
}
export type ErrorActionType = {
    type: "ERROR-2-1"
    error: ErrorType
}
export type startActionType = {
    type: "SET-START-2-1"
    error: ErrorType
    start: number
}
export type setMaxActionType = {
    type: "SET-MAX-2-1"
    error: ErrorType
    max: number
}

type ActionsType = IncActionType | ResetActionType | ErrorActionType | startActionType | setMaxActionType |
    SetStartValueActionType | IsOnOffActionType

export const counterReducer_2_1 = (state: Counter2_1Type = initialState, action: ActionsType): Counter2_1Type => {
    switch (action.type) {
        case "ONOFF-2-1":
            return {
                ...state,
                isOnOff: action.isOnOff,
            }
        case "INC-2-1":
            return {
                ...state,
                score: state.score + 1,
            }
        case "RESET-2-1":
            return {
                ...state,
                score: action.start,
            }
        case "SET-START-VALUE-2-1":
            return {
                ...state,
                start: action.start,

            }
        case "ERROR-2-1":
            return {
                ...state,
                error: action.error,
            }
        case "SET-START-2-1":
            return {
                ...state,
                score: action.start,
                start: action.start,
                error: action.error,
            }
        case "SET-MAX-2-1":
            return {
                ...state,
                max: action.max,
                error: action.error,
            }
        default:
            return state
    }
}

export const onOffAC = (isOnOff: boolean): IsOnOffActionType => {
    return {type: "ONOFF-2-1", isOnOff}
}
export const setIncAC = (): IncActionType => {
    return {type: "INC-2-1"}
}
export const resetAC = (start: number): ResetActionType => {
    return {type: "RESET-2-1", start}
}
export const setStarValuetAC = (start: number): SetStartValueActionType => {
    return {type: "SET-START-VALUE-2-1", start}
}
export const errorAC = (error: ErrorType): ErrorActionType => {
    return {type: "ERROR-2-1", error}
}
export const setStartAC = (error: ErrorType, start: number): startActionType => {
    return {type: "SET-START-2-1", error, start}
}
export const setMaxAC = (error: ErrorType, max: number): setMaxActionType => {
    return {type: "SET-MAX-2-1", error, max}
}
