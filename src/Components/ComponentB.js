import axios from 'axios';
import React, { useState, useEffect, useReducer } from 'react';
import { ADD_EVENT, VANISH } from '../actions/index';
import reducer from '../reducers/index';
import { Link } from 'react-router-dom';
import { Button, Form, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const ComponentB = () => {
    const [data, setData] = useState([])
    const [state, dispatch] = useReducer(reducer, []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_EVENT,
            title,
            body
        });
        setTitle('')
        setBody('')
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch({
            type: VANISH,
        })
        setTitle('')
        setBody('')
    }


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

            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Form.Label>Body</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleClick}>イベント作成</Button>
                <Button variant="danger" onClick={handleDelete}>イベント全削除</Button>
            </Form>

            <h1>Table</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                                <td>
                                    <Button variant="danger">削除</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

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