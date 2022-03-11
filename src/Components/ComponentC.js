import axios from 'axios';
import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';


const ComponentC = () => {

    const [data, setData] = useState([])
    const [count, setCount] = useState(0)

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
            <div>
                <div>ComponentC</div>
                <Link to="/componenta">ComponentAへ移動</Link>
            </div>
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