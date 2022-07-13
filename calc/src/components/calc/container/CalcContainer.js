import React from 'react';
import CalcLayout from "../component";
import {useDispatch, useSelector} from "react-redux";
import {addFirstValue, clearAll} from "../../../redux/actions/calcActions";

const CalcContainer = () => {
    const dispatch = useDispatch();
    const firstValue = useSelector(state => state.calcReducer.firstValue)

    const addValue = (value) => {
        dispatch(addFirstValue(value));
    }

    const clear = () => {
        dispatch(clearAll())
    }

    return (
        <>
            <CalcLayout addValue={addValue} firstValue={firstValue} clear={clear}/>
        </>
    );
};

export default CalcContainer;