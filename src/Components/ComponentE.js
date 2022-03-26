import React, { useContext } from 'react';
import { Store } from '../store/index';
import { DECREMENT, INCREMENT } from '../actions/index';
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
    console.log(globalState);
    return (
        <div>
            <h1>ComponentE.js</h1>
            <button onClick={handleClick}>+1</button>
            <button onClick={decrehandleClick}>-1</button>
        </div>
    );
};

export default ComponentE;