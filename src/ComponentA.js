import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Table, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const ComponentA = () => {
    const navigate = useNavigate()
    const backPage = () => {
        navigate("/")
    }
    const sampleArray = [
        { id: 1, name: 'aaa', date: 19920527 },
        { id: 2, name: 'bbb', date: 19920528 },
        { id: 3, name: 'ccc', date: 19920529 },
        { id: 4, name: 'ddd', date: 19920531 },
        { id: 5, name: 'eee', date: 19920501 }
    ];
    return (
        <>
            <h1>Menu</h1>
            <ul>
                <li>
                    <Button variant="primary">Hello world</Button>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/componentb" >ComponentBへ移動</Link>
                </li>
                <li>
                    <Link to="/componentc" >ComponentCへ移動</Link>
                </li>
            </ul>
            <br />
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>

            <Table bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>date</th>
                        <th>#</th>
                    </tr>
                </thead>
                {sampleArray.map((data, index) => {
                    console.log(data);
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.date}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    )
                })}


            </Table>
        </>

    );
};

export default ComponentA;