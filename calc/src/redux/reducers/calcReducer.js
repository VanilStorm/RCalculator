import {TYPES} from "./types";

const initialState = {
    firstValue: '',
    sign: '',
    secondValue: '',
}

export const calcReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case TYPES.ADD_FIRST_VALUE: {
            return {...state, firstValue: state.firstValue + payload.value}
        }

        case TYPES.CLEAR_ALL: {
            return {...state, firstValue: '', secondValue: ''}
        }

        default: {
            return state;
        }
    }
}