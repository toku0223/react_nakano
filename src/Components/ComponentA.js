import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const ComponentA = () => {
    const [count, setCount] = useState(0);

    const [data, setData] = useState([])

    useEffect(() => {
        console.log('useEffect が呼び出されました。');

        axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
            console.log(res, 'res check')
            setData(res.data)
        })
    }, []);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <>
            <div>ComponentA</div>
            <Link to="/componentb">ComponentBへ移動</Link>
            <button onClick={increment}>+</button>
            <div>count : {count}</div>

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
                    {
                        data.map((d, index) => {
                            return (
                                <tr>
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
        </>
    );
};

export default ComponentA;