import React from 'react';
import './Card.css';

const Card = (props) => {
    console.log(props)
    return (
        <div className="wrapper">
            <h1>{props.name}</h1>
            <h1>{props.date}</h1>
        </div>
    );
};

export default Card;
