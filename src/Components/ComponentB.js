import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        </>
    )
}

export default ComponentB