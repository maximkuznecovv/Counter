export enum ACTION_TYPE {
    ONOFF = "ONOFF-2-1",
    INC = "INC-2-1",
    RESET = "RESET-2-1",
    SET_START_VALUE = "SET-START-VALUE-2-1",
    ERROR = "ERROR-2-1",
    SET_START = "SET-START-2-1",
    SET_MAX = "SET-MAX-2-1",
}

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

export const counterReducer_2_1 = (state: Counter2_1Type = initialState, action: ActionsType): Counter2_1Type => {
    switch (action.type) {
        case ACTION_TYPE.ONOFF:
            return {
                ...state,
                isOnOff: action.isOnOff,
            }
        case ACTION_TYPE.INC:
            return {
                ...state,
                score: state.score + 1,
            }
        case ACTION_TYPE.RESET:
            return {
                ...state,
                score: action.start,
            }
        case ACTION_TYPE.SET_START_VALUE:
            return {
                ...state,
                start: action.start,

            }
        case ACTION_TYPE.ERROR:
            return {
                ...state,
                error: action.error,
            }
        case ACTION_TYPE.SET_START:
            return {
                ...state,
                score: action.start,
                start: action.start,
                error: action.error,
            }
        case ACTION_TYPE.SET_MAX:
            return {
                ...state,
                max: action.max,
                error: action.error,
            }
        default:
            return state
    }
}

export type ActionsType =
    ReturnType<typeof onOffAC>
    | ReturnType<typeof setIncAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof setStarValuetAC>
    | ReturnType<typeof errorAC>
    | ReturnType<typeof setStartAC>
    | ReturnType<typeof setMaxAC>

export const onOffAC = (isOnOff: boolean) => {
    return {type: ACTION_TYPE.ONOFF, isOnOff} as const
}
export const setIncAC = () => {
    return {type: ACTION_TYPE.INC} as const
}
export const resetAC = (start: number) => {
    return {type: ACTION_TYPE.RESET, start} as const
}
export const setStarValuetAC = (start: number) => {
    return {type: ACTION_TYPE.SET_START_VALUE, start} as const
}
export const errorAC = (error: ErrorType) => {
    return {type: ACTION_TYPE.ERROR, error} as const
}
export const setStartAC = (error: ErrorType, start: number) => {
    return {type: ACTION_TYPE.SET_START, error, start} as const
}
export const setMaxAC = (error: ErrorType, max: number) => {
    return {type: ACTION_TYPE.SET_MAX, error, max} as const
}
