import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Table, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const Home = () => {
    const navigate = useNavigate()


    return (
        <>
<ul>
                <li>
                    <Button variant="primary">Hello world</Button>
                </li>
                <li>
                    <Link to="/componenta">ComponentAへ移動</Link>
                </li>
                <li>
                    <Link to="/componentb" >ComponentBへ移動</Link>
                </li>
                <li>
                    <Link to="/componentc" >ComponentCへ移動</Link>
                </li>
            </ul>
        </>

    );
};

export default Home;
