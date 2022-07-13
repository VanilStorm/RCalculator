import React from 'react';
import style from './style.module.scss'

const CalcLayout = ({addValue, firstValue, clear}) => {
    return (
        <div className={style.container}>
            <div className={style.resultField}>
                <p>{firstValue ? firstValue : 0}</p>
            </div>
            <div className={style.buttons}>
                <div onClick={clear} className={`${style.button} ${style.grey}`}>AC</div>
                <div className={`${style.button} ${style.grey}`}>+/-</div>
                <div className={`${style.button} ${style.grey}`}>%</div>
                <div className={`${style.button} ${style.orange}`}>÷</div>

                <div onClick={(e) => addValue(e.target.innerText)}
                     className={`${style.button}`}>7</div>
                <div onClick={(e) => addValue(e.target.innerText)}
                     className={`${style.button}`}>8</div>
                <div onClick={(e) => addValue(e.target.innerText)}
                     className={`${style.button}`}>9</div>
                <div className={`${style.button} ${style.orange}`}>×</div>

                <div onClick={(e) => addValue(e.target.innerText)}
                     className={`${style.button}`}>4</div>
                <div onClick={(e) => addValue(e.target.innerText)}
                     className={`${style.button}`}>5</div>
                <div onClick={(e) => addValue(e.target.innerText)}
                     className={`${style.button}`}>6</div>
                <div className={`${style.button} ${style.orange}`}>-</div>

                <div onClick={(e) => addValue(e.target.innerText)}
                     className={`${style.button}`}>1</div>
                <div onClick={(e) => addValue(e.target.innerText)}
                     className={`${style.button}`}>2</div>
                <div onClick={(e) => addValue(e.target.innerText)}
                     className={`${style.button}`}>3</div>
                <div className={`${style.button} ${style.orange}`}>+</div>

                <div onClick={(e) => addValue(e.target.innerText)}
                     className={`${style.button} ${style.zero}`}>0</div>
                <div className={`${style.button}`}>,</div>
                <div className={`${style.button} ${style.orange}`}>=</div>
            </div>
        </div>
    );
};

export default CalcLayout;