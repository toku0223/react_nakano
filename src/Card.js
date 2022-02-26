import React from 'react';
import './Card.css';

const Card = (props) => {
    console.log(props)
    return (
        <div className="wrapper">
            <h1>id:{props.id}</h1>
            <h1>name:{props.name}</h1>
            <h1>date:{props.date}</h1>
        </div>
    );
};

export default Card;
