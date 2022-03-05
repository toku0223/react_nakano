import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentB = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log('useEffect が呼び出されました。');

        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res, 'res check')
            setData(res.data)
        })
    }, []);
    return (
        <>
            <div>ComponentB</div>
            <Link to="/componentc">ComponentCへ移動</Link>

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

export default ComponentB