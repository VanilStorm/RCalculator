import {TYPES} from "../reducers/types";

export const addFirstValue = (value) => ({type: TYPES.ADD_FIRST_VALUE, value})

export const clearAll = () => ({type:TYPES.CLEAR_ALL})