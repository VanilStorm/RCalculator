import {configureStore} from "@reduxjs/toolkit";
import {testReducer} from "./reducers/test";

export const store = configureStore({
    reducer: {
        testReducer: testReducer,
    }
})