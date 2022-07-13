import {configureStore} from "@reduxjs/toolkit";
import {calcReducer} from "./reducers/calcReducer";

export const store = configureStore({
    reducer: {
        calcReducer: calcReducer,
    }
})