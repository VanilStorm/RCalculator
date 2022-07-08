import {TYPES} from "./testTypes";

const initialState = {
    isTest: false,
}

export const testReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case TYPES.TEST: {
            return {...state, isTest: payload.test}
        }

        default: {
            return state;
        }
    }
}