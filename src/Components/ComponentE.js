import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../store/index';
import { DECREMENT, INCREMENT, RESET, INCRETEN, ADD_DATA } from '../actions/index';
import { Table } from 'react-bootstrap'



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

    const incretenhandleClick = () => {
        setGlobalState({
            type: INCRETEN
        });
    };

    console.log(globalState);
    return (
        <div>
            <h1>ComponentE.js</h1>
            <button onClick={handleClick}>+1</button>
            <button onClick={decrehandleClick}>-1</button>
            <button onClick={resethandleClick}>reset</button>
            <br />
            <button onClick={incretenhandleClick}>+10(3の倍数のとき)</button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    {globalState.data.map((d, index) => {
                        return (
                            <tr key={index}>
                                <td>{d.userId}</td>
                                <td>{d.id}</td>
                                <td>{d.title}</td>
                                <td>{d.completed.toString()}</td>
                            </tr>
                        )
                    })
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default ComponentE;