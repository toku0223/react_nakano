import axios from 'axios';
import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers/index';
import { render } from '@testing-library/react';
import ComponentD from './ComponentD';

const initialCount = {
    count: 0
};

const ComponentC = () => {

    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialCount);



    const increment = () => {
        console.log('increment');
        dispatch({
            type: 'INCREMENT'
        });
    };

    const decrement = () => {
        console.log('decrement');
        dispatch({
            type: 'DECREMENT'
        });
    };

    const reset = () => {
        console.log('reset');
        dispatch({
            type: 'RESET'
        });
    };

    useEffect(() => {
        return () => {
            console.log('useEffect が呼び出されました。');

            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    console.log(res, 'res check')
                    setData(res.data)

                })
        }
    }, [count, setCount]);




    return (
        <>
            <ComponentD />
            <div>
                <div>ComponentC</div>
                <Link to="/componenta">ComponentAへ移動</Link>
            </div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <h1>{state.count}</h1>
            <button onClick={reset}>RESET</button>
            <Button onClick={() => setCount(count + 1)}>GetData</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, index) => {
                        return (
                            <tr key={index}>
                                <td>{d.userId}</td>
                                <td>{d.id}</td>
                                <td>{d.title}</td>
                                <td>{d.body.toString()}</td>
                            </tr>
                        )
                    })
                    }

                </tbody>
            </Table>

        </>
    )

}


export default ComponentC