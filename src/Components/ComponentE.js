import React, { useContext } from 'react';
import { Store } from '../store/index';
import { DECREMENT, INCREMENT, RESET } from '../actions/index';
const ComponentE = () => {
    const { globalState, setGlobalState } = useContext(Store);
    const handleClick = () => {
        setGlobalState({
            type: INCREMENT
        });
    };
    const decrehandleClick = () => {
        setGlobalState({
            type: DECREMENT
        });
    };

    const resethandleClick = () => {
        setGlobalState({
            type: RESET
        })
    }
    console.log(globalState);
    return (
        <div>
            <h1>ComponentE.js</h1>
            <button onClick={handleClick}>+1</button>
            <button onClick={decrehandleClick}>-1</button>
            <button onClick={resethandleClick}>reset</button>
        </div>
    );
};

export default ComponentE;